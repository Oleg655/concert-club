import React from "react";
import style from "./Label.module.scss";
import arrow from "../assets/arrow.svg";

export const Label = () => {
  return (
    <div className={style.label}>
      <div className={style.text}>
        <span>Twenty One Pilots</span>
        <span>22.02.23 в 21:00</span>
      </div>

      <div className={style.buttons}>
        <button>
          <img src={arrow} />
        </button>
        <button>Купить билеты</button>
        <button>
          <img src={arrow} />
        </button>
      </div>
    </div>
  );
};
