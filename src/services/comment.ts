import axios from 'axios';
import getConfig from 'next/config';

import { Comment } from '../context/GlobalContext';
const { publicRuntimeConfig } = getConfig();

export const url = `${publicRuntimeConfig.API_URL || process.env.API_URL}/comment`;

export const createComment = (data: Comment) => {
  return axios
    .post<Comment>(url, data)
    .then(({ data }) => data)
    .catch(() => {
      return undefined;
    });
};

export const getComments = () => {
  return axios
    .get<Comment[]>(url)
    .then(({ data }) => data)
    .catch((e) => {
      // eslint-disable-next-line no-console
      console.log(e);
      return undefined;
    });
};
