import React from "react";
import { Link } from "react-router-dom";
import style from "./User.module.scss";

type User = {
  name: string;
  city: string;
  id: number;
};

export const User = (props: User) => {
  return (
    <>
      <div className={style.userBlock}>
        <div className={style.userInform}>
          <span className={style.userName}>{props.name}</span>
          <span className={style.userCity}>{props.city}</span>
        </div>

        <Link to={`/profile/${props.id}`}>
          <button className={style.button}>Смотреть профиль</button>
        </Link>
      </div>
    </>
  );
};
