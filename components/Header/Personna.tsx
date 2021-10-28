import React from "react";

import Select from "react-select";
import { useDispatch } from "react-redux";
import { selectPersona } from "@/actions/selectPersona";

const SelectPersona = () => {
  const options = [
    { value: "RB_Tiffany", label: "Tiffany" },
    { value: "RB_Ben", label: "Ben" },
    { value: "Neutral", label: "Neutral" },
  ];
  const dispatch = useDispatch();

  const selectValue = (e: any) => {
    dispatch(selectPersona(e.value as string));
  };

  return (
    <Select options={options} onChange={selectValue} placeholder={"Persona"} />
  );
};

export default SelectPersona;
