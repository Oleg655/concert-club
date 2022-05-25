import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { Header } from "../../../Header";
import { AppStateType } from "../../../redux/store";
import { PostT } from "../../../redux/users-reduser";
import { Post } from "../Post";
import style from "./FullPost.module.scss";

export const FullPost = () => {
  const params = useParams<"id">();
  const navigate = useNavigate();
  //const dispatch = useDispatch();
  const posts = useSelector<AppStateType, PostT[]>(
    (state) => state.usersPage.posts
  );
  const userId = useSelector<AppStateType, number|undefined>(
    (state) => state.usersPage.profile?.id
  );

  return (
    <>
      <div className={style.page}>
        <Header />
        <div className={style.posts}>
          {posts.map((p) => {
            return <Post key={p.id} post={p} fullPost />;
          })}
        </div>
        <div className={style.button}>
          <button
            onClick={() => {
              navigate(`/form${userId}`);
            }}
          >
            Добавить комментарий
          </button>
        </div>
      </div>
    </>
  );
};
