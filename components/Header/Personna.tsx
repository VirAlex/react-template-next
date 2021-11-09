import React from "react";

import Select from "react-select";
import { selectPersona } from "@/actions/selectPersona";

const SelectPersona = () => {
  const options = [
    { value: "RB_Tiffany", label: "Tiffany" },
    { value: "RB_Ben", label: "Ben" },
    { value: "Neutral", label: "Neutral" },
  ];
  const colourStyles: any = {
    control: () => ({
      backgroundColor: "transparent",
      display: "flex",
      width: "100%",
      position: "relative",
    }),
    placeholder: () => ({
      backgroundColor: "transparent",
      fontSize: "1rem",
      color: "black",
      fontFamily: "Oswald",
      textTransform: "uppercase",
    }),
    input: () => ({ width: "100%" }),
    container: () => ({ width: "100%" }),
    valueContainer: () => ({
      backgroundColor: "transparent",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
    }),
    indicatorSeparator: () => ({ display: "none" }),
    dropdownIndicator: () => ({ color: "black" }),
    singleValue: () => ({ top: "0", width: "50%" }),
    menu: () => ({
      width: "8rem",
      top: "2rem",
      left: "0",
      position: "absolute",
      backgroundColor: "white",
      borderRadius: "2px",
      zIndex: "99",
    }),
    option: (styles: any, { isFocused } :any) => {
      return {
        ...styles,
        backgroundColor: isFocused ? "black" : "white",
        color: isFocused ? "white" : "black",
        fontSize: "0.8rem",
        fontFamily: "Adobe Clean Light",
        margin: "1rem",
        transition: "all 0.2s",
        cursor: "pointer",
        width: "80%",
        textAlign: "center",
        textTransform: "uppercase",
        fontWeight: "bold",
        borderRadius: "2px",
      };
    },
  };

  const selectValue = (e: any) => {
    // dispatch(selectPersona(e.value as string));
  };

  const id: any= 1
  const inputId: any= 1

  return (
    <Select
      options={options}
      onChange={selectValue}
      placeholder={"Persona"}
      styles ={colourStyles}
      // id={Math.random()}
      id={id}
			instanceId={1}
			inputId={inputId}
			// instanceId={Math.random()}
    />
  );
};

export default SelectPersona;
