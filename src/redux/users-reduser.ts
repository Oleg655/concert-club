import { ThunkAction } from "redux-thunk";
import { ShippingField, usersAPI } from "../api/Api";

import { AppStateType } from "./store";

export type UserT = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};

export type PostT = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export type PublicationT = {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
};

export type initialStateType = typeof initialState;
const initialState = {
  users: [] as UserT[] | [],
  profile: null as UserT | null,
  posts: [] as PostT[] | [],
  publication: [] as PublicationT[] | [],
};

export const usersReducer = (
  state = initialState,
  action: ActionsType
): initialStateType => {
  switch (action.type) {
    case "SET_USERS":
      return {
        ...state,
        users: [...action.serverUsers],
      };
      case "SET_USER_PROFILE":
      return {
        ...state,
        profile: {...action.serverProfile},
      };
    
    case "SET_POSTS":
      return {
        ...state,
        posts: [...action.serverPosts],
      };
    case "SET_USER_PUBLICATION":
      return {
        ...state,
        publication: [...action.publication],
      };
    default:
      return state;
  }
};

export type ActionsType =
  | ReturnType<typeof setUsers>
  | ReturnType<typeof setUserProfile>
  | ReturnType<typeof setPosts>
  | ReturnType<typeof setUserPublication>
  | ReturnType<typeof setLoader>;

export const setUsers = (serverUsers: UserT[]) => {
  return { type: "SET_USERS", serverUsers } as const;
};
export const setUserProfile = (serverProfile: UserT) => {
  return { type: "SET_USER_PROFILE", serverProfile } as const;
};

export const setPosts = (serverPosts: PostT[]) => {
  return { type: "SET_POSTS", serverPosts } as const;
};

export const setNewPostMessage = (newPostMessage: string) => {
  return { type: "SET_NEW_POST_MESSAGE", newPostMessage } as const;
};

export const setUserPublication = (publication: PublicationT[]) => {
  return { type: "SET_USER_PUBLICATION", publication } as const;
};
export const setLoader = (loader: boolean) => {
  return { type: "SET_LOADER", loader } as const;
};

export const requestUsers = (
  count: number
): ThunkAction<Promise<void>, AppStateType, unknown, ActionsType> => {
  return async (dispatch, getState) => {
    const response = await usersAPI.getUsers(count);
    dispatch(setUsers(response.data));
  };
};
export const requestProfile = (
  userId: string|undefined
): ThunkAction<Promise<void>, AppStateType, unknown, ActionsType> => {
  return async (dispatch, getState) => {
    const response = await usersAPI.getProfile(userId);
    dispatch(setUserProfile(response.data));
  };
};
export const requestUserPublication = (
  userId: string | undefined
): ThunkAction<Promise<void>, AppStateType, unknown, ActionsType> => {
  return async (dispatch, getState) => {
    const response = await usersAPI.getUserPublication(userId);
    dispatch(setUserPublication(response.data));
  };
};
export const requestPosts = (
  userId: string | undefined
): ThunkAction<Promise<void>, AppStateType, unknown, ActionsType> => {
  return async (dispatch, getState) => {
    const response = await usersAPI.getPosts(userId);
    dispatch(setPosts(response.data));
  };
};
export const leaveComment = (
  id: string | undefined,
  data: ShippingField
): ThunkAction<Promise<void>, AppStateType, unknown, ActionsType> => {
  return async () => {
    await usersAPI.sendComment(id, data);
  };
};
