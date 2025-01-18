import axios from 'axios';

export const Instance = axios.create({
  baseURL: 'http://52.78.231.158:3000',
});

export interface PostLogin {
  email: string;
  password: string;
}
export const postLogin = async (data: PostLogin) => {
  return await Instance.post(`/login`, data);
};

export interface PostRegister {
  nickname: string;
  email: string;
  password: string;
}
export const postRegister = async (data: Omit<PostRegister, 'name'>) => {
  const requestData = {
    ...data,
    name: 'any', // name 값을 항상 'any'로 설정
  };

  return await Instance.post('/register', requestData);
};

export const postGroups = async (id: number) => {
  return await Instance.post(`/groups`, {
    userId: id,
    roleInGroup: 'parent',
  });
};
