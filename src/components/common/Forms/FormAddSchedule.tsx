import React,{useState,useEffect} from "react";
import * as yup from "yup";
import { useHistory } from "react-router-dom";
import { Form, Formik, FastField } from "formik";

import contactService from "../../../services/contactService";
import scheduleService from "../../../services/scheduleService";
import GridView from "../GridView/GridView";
import Button from "../Button/Button";
import Input from "../Input/Input";
import FormikControl from "./FormikContainer/FormikControl";
import Svg  from "../Svg/Svg";

interface FormValues {
  date: string;
  startTime: string;
  endTime: string;
  members: "";
  note: string;
  group: string;
}

interface FieldRenderProps {
  field: any;
  meta: any;
}

const initialValues: FormValues = {
  date: "",
  startTime: "",
  endTime: "",
  members: "",
  note: "",
  group: "",
};

const validationSchema = yup.object({
  title: yup.string().required("Required *"),
  date: yup.string().required("Required *"),
  startTime: yup.string().required("Required *"),
  endTime: yup.string().required("Required *"),
  // members: yup.string().required("Required *"),
  note: yup.string().required("Required *"),
  group: yup.string().required("Required *"),
});

const getDuration = (start:any, end:any)=>{

  const [startHr, startMin] = start.split(":")
  const [endHr, endMin] = end.split(":")
  console.log(startHr,startMin,endHr,endMin);
  const startDate: any = new Date(2000, 0, 1,  startHr, startMin); // 9:00 AM
  const endDate: any = new Date(2000, 0, 1, endHr, endMin); // 5:00 PM

  // the following is to handle cases where the times are on the opposite side of
  // midnight e.g. when you want to get the difference between 9:00 PM and 5:00 AM
  if (endDate < startDate) {
      endDate.setDate(endDate.getDate() + 1);
  }
  return endDate - startDate;
}
type SignupOneProps = {};


const FormAddSchedule: React.FC<SignupOneProps> = () => {
  
  // const multiinput =  React.useRef<HTMLInputElement>(null);
  const history = useHistory();
  const [contacts,setContacts] = useState<any>([]);
  const [loading, setLoading] = useState(false);
  const [customEmail, setCustomEmail] = useState("");
  const [customParticipants, setCustomParticipants] :any  = useState([]); 
  
  console.log(contacts);
  useEffect(()=>{
    contactService.getAllUserContacts().then(({ data }) => {
      console.log("contacts",data)
      setContacts(data);
    }).catch((err)=>{
      console.log("error",err.response);
    });
  },[])
  // useEffect(()=>{
  //   multiinput.current?.addEventListener("keypress",(e:any)=>{
  //     console.log("input event listener",e.keyCode)
  //     e.stopPropagation();
  //   })
  // },[multiinput])
  const customHandleEmailChange = (e:any)=>{
    const {value} = e.target;
    // console.log(value);
    setCustomEmail(value);
  }
  const handleAddParticipant = ()=>{
    if(!customParticipants.includes(customEmail)){
      setCustomParticipants([...customParticipants ,customEmail])
    }
    setCustomEmail("")
  }
  const onSubmit = async (values: any) => {
    // const {date, endTime, note, startTime, title,members,group} =  values
    const {date, endTime, note, startTime, title} =  values
    const started_at = `${date}T${startTime}`
    let duration = getDuration(startTime,endTime);
    let token = "token"
    let participants:string[] = customParticipants
    const data = {type:"VIDEO", 
    privacy:"PUBLIC",
    stages:[],
    title, note, token, started_at, duration,participants}
    console.log(data);
    // return
    try{
      setLoading(true);
      const response = await scheduleService.createNewSchdule(data);
      console.log(response);
      return history.push("/user/schedule-list");
    }catch(err){
      console.log(err.response);
    }finally{
      setLoading(false);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      <Form>
      <FastField name="title">
          {({ field, meta }: FieldRenderProps) => {
            return (
              <Input
                label="Title"
                iconId="icon-message-open"
                placeholder="Start typing..."
                error={meta.touched && meta.error ? meta.error : null}
                {...field}
              />
            );
          }}
        </FastField>
        <GridView grid={2}>
          <FastField name="date">
            {({ field, meta }: FieldRenderProps) => {
              return (
                <Input
                  label="Date"
                  type="date"
                  error={meta.touched && meta.error ? meta.error : null}
                  {...field}
                />
              );
            }}
          </FastField>
          <GridView grid={2}>
            <FastField name="startTime">
              {({ field, meta }: FieldRenderProps) => {
                return (
                  <Input
                    type="time"
                    label="Time from"
                    // iconId="icon-solid-time"
                    // placeholder="4:00"
                    error={meta.touched && meta.error ? meta.error : null}
                    {...field}
                  />
                );
              }}
            </FastField>
            <FastField name="endTime">
              {({ field, meta }: FieldRenderProps) => {
                return (
                  <Input
                    type="time"
                    label="Time to"
                    // iconId="icon-solid-time"
                    // placeholder="5:00"
                    error={meta.touched && meta.error ? meta.error : null}
                    {...field}
                  />
                );
              }}
            </FastField>
          </GridView>
        </GridView>
        {/* <FormikControl
          control="datalist"
          name="members"
          label="Members"
          list="members"
          options={contacts}
        /> */}
        <div className="input-container">
          <label htmlFor="member" className="input__label">Member</label>
            <div className="input__holder">
              <input className="input__ele" list="members" placeholder="add participant's email" onChange={customHandleEmailChange} value={customEmail}/>
              <Svg
                iconId="icon-plan-check"
                handleClick={handleAddParticipant}
                cssClass="member-checkbox__button" 
              />
              <datalist id="members" className="input__ele">
                <option value="bamiayo90@gmail.com" />
                <option value="bamiayo91@gmail.com" />
                <option value="bamiayo92@gmail.com" />
              </datalist>
            </div>
            <div className="member-checkbox">
              {customParticipants?.map((item:string)=>
                <div key={item} className="member-checkbox__label">
                    <span className="member-checkbox__text">{item}</span>
                </div>)
                }
            </div>
        </div>
        <FastField name="note">
          {({ field, meta }: FieldRenderProps) => {
            return (
              <Input
                label="Note"
                iconId="icon-message-open"
                placeholder="Start typing..."
                error={meta.touched && meta.error ? meta.error : null}
                {...field}
              />
            );
          }}
        </FastField>

        <FormikControl
          control="select"
          name="group"
          label="Select group"
          placeholder="Select group"
          options={["PUBLIC", "PRIVATE"]}
        />

        <div className="flex-r-jcbetween m-t-120px">
          <div>
            <Button
              cssClass="btn--primary btn--small"
              text="Create New Event"
              type="submit"
              isLoading={loading}
            />
          </div>

          <Button cssClass="btn--grey btn--small m-l-10px" text="Cancel" />
        </div>
      </Form>
    </Formik>
  );
};

export default FormAddSchedule;
