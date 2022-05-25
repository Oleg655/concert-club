import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppStateType, useTypedDispatch } from "../../redux/store";
import {
  requestUsers,
  setLoader,
  setUsers,
  UserT,
} from "../../redux/users-reduser";
import { User } from "./user/User";
import style from "./LowerBlock.module.scss";
import { Description } from "./information/Description";
import { Request } from "./information/Request";
import { Futer } from "./footer/Futer";

export const LowerBlock = () => {
  const dispatch = useTypedDispatch();
  const userData = useSelector<AppStateType, UserT[]>(
    (state) => state.usersPage.users
  );
  const loader = useSelector<AppStateType, boolean>(
    (state) => state.usersPage.loader
  );

  useEffect(() => {
    dispatch(requestUsers(4));
  }, []);

  return (
    <div className={style.wrapper}>
      <div className={style.name}>Купили билеты</div>
      {loader ? (
        <div>...loading</div>
      ) : (
        <div className={style.usersBlock}>
          {userData.map((u) => {
            return <User name={u.name} city={u.address.city} id={u.id} />;
          })}
        </div>
      )}

      <div className={style.information}>
        <Description />
        <Request />
      </div>
      <Futer />
    </div>
  );
};
