import React from "react";
import { Field } from "formik";
import Select from "./../../Input/Select";

interface FieldRenderProps {
  field: any;
  meta: any;
}
interface Props {
  name: any;
  label?: any;
  hasIcon?: any;
  iconId?: any;
  options?: Array<any>;
  placeholder?: any;
}
const SelectControl: React.FC<Props> = (props) => {
  const { name, options, label, placeholder } = props;
  return (
    <Field name={name} id={name}>
      {({ field, meta }: FieldRenderProps) => {
        return (
          <Select
            name={name}
            label={label}
            options={options}
            placeholder={placeholder}
            error={meta.touched && meta.error ? meta.error : null}
            {...field}
          />
        );
      }}
    </Field>
  );
};

export default SelectControl;
