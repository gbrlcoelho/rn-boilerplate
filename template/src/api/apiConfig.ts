import {BASE_URL} from '@env';
import axios from 'axios';

export const api = axios.create({
  baseURL: BASE_URL,
});
