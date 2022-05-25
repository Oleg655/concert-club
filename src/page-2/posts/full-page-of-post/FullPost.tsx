import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { Header } from "../../../Header";
import { AppStateType, useTypedDispatch } from "../../../redux/store";
import {
  PostT,
  requestPosts,
  requestProfile,
  UserT,
} from "../../../redux/users-reduser";
import { Post } from "../Post";
import style from "./FullPost.module.scss";

export const FullPost = () => {
  const params = useParams<"id">();
  const navigate = useNavigate();
  const dispatch = useTypedDispatch();
  const posts = useSelector<AppStateType, PostT[]>(
    (state) => state.usersPage?.posts
  );
  const userId = useSelector<AppStateType, number | undefined>(
    (state) => state.usersPage.profile?.id
  );
  const profile = useSelector<AppStateType, UserT | null>(
    (state) => state.usersPage.profile
  );
  const loader = useSelector<AppStateType, boolean>(
    (state) => state.usersPage.loader
  );
  useEffect(() => {
    dispatch(requestPosts(params.id));
    dispatch(requestProfile(params.id));
  }, []);

  return (
    <>
      <div className={style.page}>
        <Header />

        <div className={style.postsContainer}>
          {posts.map((p) => {
            return (
              <div className={style.posts}>
                <div className={style.usersNames}>
                  <span>{profile?.email}</span>
                  <span>{profile?.name}</span>
                </div>
                <div className={style.title}>{p.title}</div>
                <div className={style.body}>{p.body}</div>
              </div>
            );
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
