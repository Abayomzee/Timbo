import React, { useEffect} from "react";
import * as yup from "yup";
import { Form, Field, Formik } from "formik";

import GridView from "../GridView/GridView";
import Button from "../Button/Button";
import Input from "../Input/Input";


import { userStore } from "./../../../store/userStore";
import userService from "../../../services/userService";

// interface FormValues {
//   firstname: string;
//   lastname: string;
//   administrative_role: string;
//   email: string;
//   phone: string;
//   addressLine: string;
//   social: string;
//   link: string;
// }

interface FieldRenderProps {
  field: any;
  meta: any;
}

// const initialValues: FormValues = {
//   firstname: "",
//   lastname: "",
//   administrative_role: "",
//   email: "",
//   phone: "",
//   addressLine: "",
//   social: "",
//   link: "",
// };

const validationSchema = yup.object({
  firstname: yup.string().required("Required *").nullable(),
  lastname: yup.string().required("Required *").nullable(),
  email: yup.string().email().required("Required *").nullable(),
  administrative_role: yup.string().nullable(),
  phone: yup.string().nullable(),
  addressLine: yup.string().nullable(),
  social: yup.string().nullable(),
  link: yup.string().nullable(),
});

type SignupOneProps = {
  history?: any;
  match?: any; 
  location?: any;
};
const FormGeneralProfileInfo: React.FC<SignupOneProps> = ({ history }) => {
  const { user, getUser } = userStore();
  // const [currentUser, setCurrentUser] = useState({})
  useEffect(() => {
    (async () => {
      await getUser();
      // console.log(currentUser)
    })();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onSubmit = (values: any) => {
    try {
      userService.update(values).then(({ data }) => {
      console.log(data);
        
        // history.push("/user");
        // history.go(0);
      });
    } catch (ex) {
      if (ex.response && ex.response.status === 401) {
      }
    }
  };

  return (
    <Formik
      onSubmit={onSubmit}
      validationSchema={validationSchema}
      initialValues={user}
    >
      <Form>
        <GridView grid={2}>
          <Field name="firstname">
            {({ field, meta }: FieldRenderProps) => {
              return (
                <Input
                  label="First name"
                  iconId="icon-user"
                  error={meta.touched && meta.error ? meta.error : null}
                  {...field}
                />
              );
            }}
          </Field>

          <Field name="lastname">
            {({ field, meta }: FieldRenderProps) => {
              return (
                <Input
                  label="Last name"
                  iconId="icon-user"
                  error={meta.touched && meta.error ? meta.error : null}
                  {...field}
                />
              );
            }}
          </Field>

          <Field name="administrative_role">
            {({ field, meta }: FieldRenderProps) => {
              return (
                <Input
                  label="Role"
                  iconId="icon-user-loud"
                  error={meta.touched && meta.error ? meta.error : null}
                  {...field}
                />
              );
            }}
          </Field>
        </GridView>

        <GridView grid={2}>
          <Field name="email">
            {({ field, meta }: FieldRenderProps) => {
              return (
                <Input
                  label="email"
                  iconId="icon-message"
                  error={meta.touched && meta.error ? meta.error : null}
                  {...field}
                />
              );
            }}
          </Field>
        </GridView>
        <GridView grid={2}>
          <Field name="phone">
            {({ field, meta }: FieldRenderProps) => {
              return (
                <Input
                  label="phone"
                  iconId="icon-phone-right"
                  error={meta.touched && meta.error ? meta.error : null}
                  {...field}
                />
              );
            }}
          </Field>
        </GridView>

        <GridView grid={2}>
          <Field name="addressLine">
            {({ field, meta }: FieldRenderProps) => {
              return (
                <Input
                  label="Address line"
                  iconId="icon-map"
                  error={meta.touched && meta.error ? meta.error : null}
                  {...field}
                />
              );
            }}
          </Field>
        </GridView>

        <GridView grid={2}>
          <Field name="social">
            {({ field, meta }: FieldRenderProps) => {
              return (
                <Input
                  label="social"
                  iconId="icon-lock"
                  error={meta.touched && meta.error ? meta.error : null}
                  {...field}
                />
              );
            }}
          </Field>
          <Field name="link">
            {({ field, meta }: FieldRenderProps) => {
              return (
                <Input
                  label="link"
                  iconId="icon-link"
                  error={meta.touched && meta.error ? meta.error : null}
                  {...field}
                />
              );
            }}
          </Field>
        </GridView>

        <div className="flex-r-jcbetween m-t-120px">
          <div>
            <Button
              cssClass="btn--primary btn--small"
              text="Update Settings"
              type="submit"
            />
            <Button cssClass="btn--grey btn--small m-l-10px" text="Cancel" />
          </div>

          <Button
            cssClass="btn btn--small btn--all-grey btn-icon-n-text"
            withIcon={true}
            btnIcon="icon-trash-sm"
            iconClass="icon-trash-sm btn-icon-n-text__icon"
            text="Deactivate Account"
          />
        </div>
      </Form>
    </Formik>
  );
};

export default FormGeneralProfileInfo;
