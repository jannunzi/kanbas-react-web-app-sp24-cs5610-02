import React, { useState } from "react";
import { useSelector } from "react-redux";
import { LabState } from "./store";
function HelloWorld() {
  const { message } = useSelector((store: LabState) => store.helloReducer);
  return <div>{message}</div>;
}

export default HelloWorld;
