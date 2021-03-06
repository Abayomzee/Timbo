import React, { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import * as yup from "yup";
import { Form, Field, Formik } from "formik";

import Button from "../Button/Button";
import Input from "../Input/Input";

import userService from "./../../../services/userService";

interface FormValues {
  password: string;
  passwordConfirm: string;
}

interface FieldRenderProps {
  field: any;
  meta: any;
}

const initialValues: FormValues = {
  password: "",
  passwordConfirm: "",
};

type ErrorProps = {
  setErrors?: any;
};

interface ParamsProps {
  token: any;
}

const validationSchema = yup.object({
  password: yup.string().required("Required *"),
  passwordConfirm: yup.string().required("Required *"),
});

const ResetForm: React.FC<{}> = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const history = useHistory();
  const { token } = useParams<ParamsProps>();

  const onSubmit = async (values: any, { setErrors }: ErrorProps) => {
    console.log(values);

    if (values.password !== values.passwordConfirm)
      return setErrors({ passwordConfirm: "Password do not match" });

    setIsLoading(true);

    try {
      await userService.resetPassword(values, token).then(({ data }) => {
        console.log(data);
        setIsLoading(false);
        history.push(`/auth`);
      });
    } catch (ex) {
      if (ex.response && ex.response.status === 401) {
        console.log(ex.response);
        setErrors({ email: "Invalid email provided" });
        setIsLoading(false);
      }
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      <Form>
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

        <Field name="passwordConfirm">
          {({ field, meta }: FieldRenderProps) => {
            return (
              <Input
                label="Confirm password"
                type="password"
                iconId="icon-check"
                error={meta.touched && meta.error ? meta.error : null}
                {...field}
              />
            );
          }}
        </Field>
        <Button
          cssClass="btn--primary btn--medium btn--full"
          text="Reset"
          type="submit"
          isLoading={isLoading}
        />
      </Form>
    </Formik>
  );
};

export default ResetForm;
