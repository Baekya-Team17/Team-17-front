import axios from 'axios';
export interface PostLogin {
  email: string;
  password: string;
}

export const Instance = axios.create({
  baseURL: 'http://52.78.231.158:3000',
});
export const postLogin = async (data: PostLogin) => {
  return await Instance.post(`/login`, data);
};
