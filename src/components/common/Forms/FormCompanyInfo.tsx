import React from "react";
import * as yup from "yup";
import { Form, Field, Formik } from "formik";

import GridView from "../GridView/GridView";
import Button from "../Button/Button";
import Input from "../Input/Input";

interface FormValues {
  companyName: string;
  location: string;
  billingAddress: string;
  zipCode: string;
  phone: string;
  language: string;
  numberOfEmployees: string;
}

interface FieldRenderProps {
  field: any;
  meta: any;
}

const initialValues: FormValues = {
  companyName: "",
  location: "",
  billingAddress: "",
  zipCode: "",
  phone: "",
  language: "",
  numberOfEmployees: "",
};

const validationSchema = yup.object({
  companyName: yup.string().required("Required *"),
  location: yup.string().required("Required *"),
  billingAddress: yup.string().required("Required *"),
  zipCode: yup.string().required("Required *"),
  phone: yup.string().required("Required *"),
  language: yup.string(),
  numberOfEmployees: yup.string(),
});

type SignupOneProps = {
  history?: any;
  match?: any;
  location?: any;
};
const FormCompanyInfo: React.FC<SignupOneProps> = ({ history }) => {
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
        <GridView grid={2}>
          <Field name="companyName">
            {({ field, meta }: FieldRenderProps) => {
              return (
                <Input
                  label="Company name"
                  iconId="icon-user"
                  error={meta.touched && meta.error ? meta.error : null}
                  {...field}
                />
              );
            }}
          </Field>

          <Field name="location">
            {({ field, meta }: FieldRenderProps) => {
              return (
                <Input
                  label="Location"
                  iconId="icon-user-loud"
                  error={meta.touched && meta.error ? meta.error : null}
                  {...field}
                />
              );
            }}
          </Field>
        </GridView>

        <GridView grid={2}>
          <Field name="billingAddress">
            {({ field, meta }: FieldRenderProps) => {
              return (
                <Input
                  label="Billing Address"
                  iconId="icon-message"
                  error={meta.touched && meta.error ? meta.error : null}
                  {...field}
                />
              );
            }}
          </Field>
          <Field name="zipCode">
            {({ field, meta }: FieldRenderProps) => {
              return (
                <Input
                  label="Zip code"
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
                  label="Phone"
                  iconId="icon-phone-right"
                  error={meta.touched && meta.error ? meta.error : null}
                  {...field}
                />
              );
            }}
          </Field>
          <Field name="language">
            {({ field, meta }: FieldRenderProps) => {
              return (
                <Input
                  label="Language"
                  iconId="icon-phone-right"
                  error={meta.touched && meta.error ? meta.error : null}
                  {...field}
                />
              );
            }}
          </Field>
        </GridView>

        <GridView grid={2}>
          <Field name="numberOfEmployees">
            {({ field, meta }: FieldRenderProps) => {
              return (
                <Input
                  label="Number of employees"
                  iconId="icon-map"
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

export default FormCompanyInfo;
