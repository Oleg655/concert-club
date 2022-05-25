import React from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { AppStateType } from "../../redux/store";
import { PostT } from "../../redux/users-reduser";
import style from "./Post.module.scss";

type Post = {
  post: PostT;
  fullPost?: boolean;
  name?: string;
  email?: string;
};

export const Post = (props: Post) => {
  const navigate = useNavigate();

  return (
    <>
      <div
        onClick={() => {
          navigate(`/fullposts/${props.post.userId}`);
        }}
        className={style.post}
      >
        <div className={style.title}>{props.post.title}</div>
        <div className={style.body}>{props.post.body}</div>
      </div>
    </>
  );
};
