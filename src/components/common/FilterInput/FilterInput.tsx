import React from "react";

interface Props {
  cssClass?: string;
}
const FilterSelect: React.FC<Props> = ({ cssClass }) => {
  return (
    <select className={`filter-select ${cssClass}`}>
      <option value="">This month</option>
      <option value="">Last month</option>
      <option value="">Next Month</option>
    </select>
  );
};

export default FilterSelect;
