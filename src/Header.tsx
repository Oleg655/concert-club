import React from "react";
import { useNavigate } from "react-router-dom";
import style from "./Header.module.scss";

type Header = {
  position?: boolean;
};

export const Header = (props: Header) => {
  const navigate = useNavigate()
    
  return (
    <div className={`${props.position ? style.absolute : style.sticky}`}>
      <div className={style.name}>CONCERT CLUB</div>
      <div className={style.buttons}>
        <button>Версия для слабовидящих</button>
        <button onClick={()=>{navigate('/')}}>Мой профиль</button>
      </div>
    </div>
  );
};
