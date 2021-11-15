import React from "react";
import * as yup from "yup";
import { Form, Field, Formik } from "formik";

import GridView from "../GridView/GridView";
import Button from "../Button/Button";
import Input from "../Input/Input";
import Typography from "../Typography/Typography";

interface FormValues {
  currentPassword: string;
  newPassword: string;
  questions1: string;
  questions1Answer: string;
  questions2: string;
  questions2Answer: string;
}

interface FieldRenderProps {
  field: any;
  meta: any;
}

const initialValues: FormValues = {
  currentPassword: "",
  newPassword: "",
  questions1: "",
  questions1Answer: "",
  questions2: "",
  questions2Answer: "",
};

const validationSchema = yup.object({
  currentPassword: yup.string().required("Required *"),
  newPassword: yup.string().required("Required *"),
  questions1: yup.string().email().required("Required *"),
  questions1Answer: yup.string().required("Required *"),
  questions2: yup.string().required("Required *"),
  questions2Answer: yup.string(),
});

type SignupOneProps = {
  history?: any;
  match?: any;
  location?: any;
};
const FormProfileSecurity: React.FC<SignupOneProps> = ({ history }) => {
  const onSubmit = (values: any) => {
    console.log(values);
    history.push("/user/contacts-detail");
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      <Form>
        <Typography
          type="h5"
          text="Change password"
          cssClass="head-9 m-b-40px"
        />
        <GridView grid={2}>
          <Field name="currentPassword">
            {({ field, meta }: FieldRenderProps) => {
              return (
                <Input
                  label="Current password"
                  iconId="icon-lock"
                  error={meta.touched && meta.error ? meta.error : null}
                  {...field}
                />
              );
            }}
          </Field>

          <Field name="newPassword">
            {({ field, meta }: FieldRenderProps) => {
              return (
                <Input
                  label="New password"
                  iconId="icon-lock"
                  error={meta.touched && meta.error ? meta.error : null}
                  {...field}
                />
              );
            }}
          </Field>
        </GridView>

        <Typography
          type="h5"
          text="Security questions"
          cssClass="head-9 m-b-40px"
        />
        <GridView grid={2}>
          <Field name="questions1">
            {({ field, meta }: FieldRenderProps) => {
              return (
                <Input
                  label="Questions #1"
                  iconId="icon-pen"
                  error={meta.touched && meta.error ? meta.error : null}
                  {...field}
                />
              );
            }}
          </Field>
          <Field name="questions1Answer">
            {({ field, meta }: FieldRenderProps) => {
              return (
                <Input
                  label="Answer"
                  iconId="icon-comment-2"
                  error={meta.touched && meta.error ? meta.error : null}
                  {...field}
                />
              );
            }}
          </Field>
        </GridView>
        <GridView grid={2}>
          <Field name="questions2">
            {({ field, meta }: FieldRenderProps) => {
              return (
                <Input
                  label="Questions #2"
                  iconId="icon-pen"
                  error={meta.touched && meta.error ? meta.error : null}
                  {...field}
                />
              );
            }}
          </Field>
          <Field name="questions2Answer">
            {({ field, meta }: FieldRenderProps) => {
              return (
                <Input
                  label="Answer"
                  iconId="icon-comment-2"
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

export default FormProfileSecurity;
