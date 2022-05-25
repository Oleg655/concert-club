import React from "react";
import style from "./Request.module.scss";

export const Request = () => {
  return (
    <div className={style.requestBlock}>
      <div className={style.title}>Оставить заявку на проведение концерта</div>
      <textarea placeholder='Расскажите о вашем предложении'></textarea>
      <div>
        <button>Отправить</button>
      </div>
    </div>
  );
};
