import axios from 'axios';
import getConfig from 'next/config';

import { SessionData } from '../context/GlobalContext';
const { publicRuntimeConfig } = getConfig();

export const url = `${publicRuntimeConfig.API_URL || process.env.API_URL}/session`;

export const getUserAttributes = () => {
  return axios
    .get<SessionData>(url)
    .then(({ data }) => data)
    .catch(() => {
      return null;
    });
};
