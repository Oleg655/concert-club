import React from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { AppStateType } from "../../redux/store";
import { PostT } from "../../redux/users-reduser";
import style from "./Post.module.scss";

type Post = {
  post: PostT;
  fullPost?: boolean;
};

export const Post = (props: Post) => {
  const navigate = useNavigate();
  const name = useSelector<AppStateType, string | undefined>(
    (state) => state.usersPage.profile?.name
  );
  const email = useSelector<AppStateType, string | undefined>(
    (state) => state.usersPage.profile?.email
  );
  return (
    <>
      {props.fullPost ? (
        <div className={style.fullPost}>
          <div className={style.userInform}>
            <span>{name}</span>
            <span>{email}</span>
          </div>
          <div className={style.title}>{props.post.title}</div>
          <div className={style.body}>{props.post.body}</div>
        </div>
      ) : (
        <div
          onClick={() => {
            navigate(`/fullposts/${props.post.userId}`);
          }}
          className={style.post}
        >
          <div className={style.title}>{props.post.title}</div>
          <div className={style.body}>{props.post.body}</div>
        </div>
      )}
    </>
  );
};
