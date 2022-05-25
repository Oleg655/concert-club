import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppStateType, useTypedDispatch } from "../../redux/store";
import { PostT, requestPosts, setPosts } from "../../redux/users-reduser";
import { Post } from "./Post";
import style from './Posts.module.scss'

type Posts = {
  userId: string | undefined;
};

export const Posts = (props: Posts) => {
  const dispatch = useTypedDispatch();
  const posts = useSelector<AppStateType, PostT[]>(
    (state) => state.usersPage.posts
  );
  useEffect(() => {
    dispatch(requestPosts(props.userId))
  }, []);
  return (
    <div className={style.postsContainer}>
      <div className={style.name}>Посты</div>
      <div className={style.posts}>
        {posts.slice(0,2).map((p) => {
          return <Post post={p} key={p.id}/>;
        })}
      </div>
    </div>
  );
};
