import axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://jsonplaceholder.typicode.com/",
});
export type ShippingField = {
  email: string;
  name: string;
  text: string;
};
export const usersAPI = {
  getUsers: (count: number) => {
    return instance.get(`users?_limit=${count}`);
  },
  getUserPublication: (userId: string | undefined) => {
    return instance.get(`users/${userId}/photos`);
  },
  getPosts: (userId: string | undefined) => {
    return instance.get(`users/${userId}/posts`);
  },
  sendComment: (id: string | undefined, data: ShippingField) => {
    return instance.post(`users/${id}/posts`, { data });
  },
  getProfile:(userId:string|undefined)=>{
    return instance.get(`users/${userId}`)
  }
};
