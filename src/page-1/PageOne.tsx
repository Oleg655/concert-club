import React from "react";
import { Header } from "../Header";
import { Label } from "./Label";
import { LowerBlock } from "./lower-block/LowerBlock";
import style from "./PageOne.module.scss";

export const PageOne = () => {
  return (
    <div className={style.pageOne}>
      <Header position />
      <Label />
      <LowerBlock />
    </div>
  );
};
