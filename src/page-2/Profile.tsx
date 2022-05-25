import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Header } from "../Header";
import { AppStateType, useTypedDispatch } from "../redux/store";
import { requestPosts, requestProfile, UserT } from "../redux/users-reduser";
import { Posts } from "./posts/Posts";
import { Publication } from "./posts/publication/Publication";
import style from "./Profile.module.scss";

export const Profile = () => {
  const params = useParams<"id">();

  const dispatch = useTypedDispatch();
  const profile = useSelector<AppStateType, UserT | null>(
    (state) => state.usersPage.profile
  );
  
  useEffect(() => {
    dispatch(requestProfile(params.id));
  }, []);
  return (
    <>
      {profile && (
        <div className={style.profile}>
          <Header />
          <div className={style.border}>
            <div className={style.description}>
              <div className={style.name}>{profile.name}</div>
              <div className={style.contacts}>
                <span className={style.city}>{profile.address.city}</span>
                <span className={style.email}>{profile.email}</span>
                <span className={style.phone}>{profile.phone}</span>
                <button className={style.buttonLeft}>Написать сообщение</button>
                <button className={style.buttonRight}>
                  Предложить сходить на концерт
                </button>
              </div>
            </div>

            <Posts userId={params.id} />
          </div>
          <Publication />
        </div>
      )}
    </>
  );
};
