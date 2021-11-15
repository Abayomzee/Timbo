import React, { useState } from "react";
import { useHistory, useRouteMatch } from "react-router";
import * as yup from "yup";
import { Form, Field, Formik, FieldArray } from "formik";

import GridView from "../GridView/GridView";
import Button from "../Button/Button";
import Input from "../Input/Input";
import FormikControl from "./FormikContainer/FormikControl";

import contactService from "./../../../services/contactService";

interface FieldRenderProps {
  field: any;
  meta: any;
}
interface FieldArrayConfig {
  push: any;
  remove: any;
  form: any;
}

type Key = string | number;

interface ReactElement {
  type: any;
  props: any;
  key: Key | null;
}

interface FormValues {
  fullname: string;
  role: string;
  emails: Array<any>;
  phoneNumbers: Array<any>;
  address: string;
  socials: Array<any>;
  // link: string;
}

const initialValues: FormValues = {
  fullname: "",
  role: "",
  emails: [""],
  phoneNumbers: [""],
  address: "",
  socials: [
    {
      type: "",
      value: "",
    },
  ],
  // link: "",
};

const validationSchema = yup.object({
  fullname: yup.string().required("Required *"),
  role: yup.string().required("Required *"),
  emails: yup.array(yup.string().email().required("Required *")),
  phoneNumbers: yup.array(yup.string().required("Required *")),
  address: yup.string().required("Required *"),
  socials: yup.array(
    yup.object({
      type: yup.string().required("Required *"),
      value: yup.string().required("Required *"),
    })
  ),
  // link: yup.string().required("Required *"),
});

type SignupOneProps = {};
const FormContactInformation: React.FC<SignupOneProps> = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const history = useHistory();
  const match = useRouteMatch("/user");
  const path = match?.path;

  const onSubmit = async (values: any) => {
    setIsLoading(true);
    console.log(values);
    const { fullname, role, emails, phoneNumbers, address, socials } = values;
    const primaryEmail = emails.shift();
    const primaryPhone = phoneNumbers.shift();
    const data = {
      fullname,
      email: primaryEmail,
      role,
      phone: primaryPhone,
      additional_email: emails,
      additional_phone: phoneNumbers,
      address,
      social: socials,
    };
    console.log(data);

    try {
      await contactService.createContact(data).then((res) => {
        console.log(res);
        setIsLoading(false);
        history.push(`${path}/contacts`);
      });
    } catch (error) {
      setIsLoading(false);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      <Form>
        <GridView grid={2}>
          <FormikControl
            control="input"
            name="fullname"
            label="Full name"
            hasIcon={true}
            iconId="icon-user"
          />

          <FormikControl
            control="input"
            name="role"
            label="Role"
            hasIcon={true}
            iconId="icon-user-loud"
          />
        </GridView>

        <FieldArray name="emails">
          {(
            { remove, push, form }: FieldArrayConfig,
            context?: any
          ): ReactElement => {
            const { values } = form;
            const { emails } = values;
            return emails.map((email: any, index: any) => (
              <GridView grid={2} key={index}>
                <Field name={`emails[${index}]`}>
                  {({ field, meta, ...rest }: FieldRenderProps) => {
                    return (
                      <Input
                        label={`email ${index > 0 ? index + 1 : ""}`}
                        iconId="icon-message"
                        error={meta.touched && meta.error ? meta.error : null}
                        {...field}
                      />
                    );
                  }}
                </Field>

                <div className="align-self-center">
                  {index === 0 ? (
                    <Button
                      cssClass="btn btn-icon-naked btn-total-naked btn-icon-n-text"
                      withIcon={true}
                      iconClass="icon-circle-plus m-r-5px"
                      btnIcon="icon-circle-plus"
                      text="Add Email"
                      handleClick={() => push("")}
                    />
                  ) : (
                    <Button
                      cssClass="btn btn-icon-naked btn-total-naked btn-icon-n-text"
                      withIcon={true}
                      iconClass="icon-circle-plus m-r-5px"
                      btnIcon="icon-circle-plus"
                      text="Remove Email"
                      handleClick={() => remove(index)}
                    />
                  )}
                </div>
              </GridView>
            ));
          }}
        </FieldArray>

        <FieldArray name="phoneNumbers">
          {(
            { remove, push, form }: FieldArrayConfig,
            context?: any
          ): ReactElement => {
            const { values } = form;
            const { phoneNumbers } = values;
            return phoneNumbers.map((email: any, index: any) => (
              <GridView grid={2} key={index}>
                <Field name={`phoneNumbers[${index}]`}>
                  {({ field, meta }: FieldRenderProps) => {
                    return (
                      <Input
                        label={`Phone ${index > 0 ? index + 1 : ""}`}
                        iconId="icon-message"
                        error={meta.touched && meta.error ? meta.error : null}
                        {...field}
                      />
                    );
                  }}
                </Field>

                <div className="align-self-center">
                  {index === 0 ? (
                    <Button
                      cssClass="btn btn-icon-naked btn-total-naked btn-icon-n-text"
                      withIcon={true}
                      iconClass="icon-circle-plus m-r-5px"
                      btnIcon="icon-circle-plus"
                      text="Add Phone"
                      handleClick={() => push("")}
                    />
                  ) : (
                    <Button
                      cssClass="btn btn-icon-naked btn-total-naked btn-icon-n-text"
                      withIcon={true}
                      iconClass="icon-circle-plus m-r-5px"
                      btnIcon="icon-circle-plus"
                      text="Remove Phone"
                      handleClick={() => remove(index)}
                    />
                  )}
                </div>
              </GridView>
            ));
          }}
        </FieldArray>

        <GridView grid={2}>
          <FormikControl
            control="input"
            name="address"
            label="Address line"
            hasIcon={true}
            iconId="icon-map"
          />
        </GridView>

        <GridView grid={2}>
          <FormikControl
            control="select"
            name="socials[0].type"
            label="Social"
            placeholder="social"
            options={["Facebook", "Twitter", "Instagram"]}
          />
          <FormikControl
            control="input"
            name="socials[0].value"
            label="Link"
            hasIcon={true}
            iconId="icon-link"
          />
        </GridView>

        <div className="flex-r-jcbetween m-t-100px">
          <Button
            cssClass="btn--primary btn--small btn--fix-width-197px"
            text="Create New Account"
            type="submit"
            isLoading={isLoading}
          />
          <Button cssClass="btn--grey btn--small" text="Cancel" type="reset" />
        </div>
      </Form>
    </Formik>
  );
};

export default FormContactInformation;
