import React from "react";
import * as yup from "yup";
import { Link, useHistory } from "react-router-dom";
import { Form, Field, Formik } from "formik";

import Button from "../Button/Button";
import Input from "../Input/Input";
import Radio from "../Input/Radio";

interface FormValues {
  email: string;
  password: string;
  rememberMe: boolean;
}

interface FieldRenderProps {
  field: any;
  meta: any;
}

const initialValues: FormValues = {
  email: "",
  password: "",
  rememberMe: false,
};

const validationSchema = yup.object({
  email: yup.string().email().required("Required *"),
  password: yup.string().required("Required *"),
  rememberMe: yup.string(),
});

type SignInProps = {};
const AdminSignInForm: React.FC<SignInProps> = () => {
  const history = useHistory();
  const onSubmit = (values: any) => {
    console.log(values);
    history.push("/admin");
    history.go(0)
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      <Form>
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

        <Field name="password">
          {({ field, meta }: FieldRenderProps) => {
            return (
              <Input
                label="password"
                type="password"
                iconId="icon-lock"
                error={meta.touched && meta.error ? meta.error : null}
                {...field}
              />
            );
          }}
        </Field>

        <div className="flex-rw-jcb-aic m-b-40px">
          <Field name="rememberMe">
            {({ field, meta }: FieldRenderProps) => {
              return <Radio label="Remember me" name="rememberMe" {...field} />;
            }}
          </Field>

          <Link to="/" className="link link--primary">
            Recover password
          </Link>
        </div>
        <Button
          cssClass="btn--primary btn--medium btn--full"
          text="Sign In"
          type="submit"
        />
      </Form>
    </Formik>
  );
};

export default AdminSignInForm;
