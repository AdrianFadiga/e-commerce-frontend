import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
export const requestApi = async <T> ({method, url, headers = {}, params = {}, data = {}}: AxiosRequestConfig): Promise<AxiosResponse<T>> => {
  const baseURL = 'http://localhost:3000/api';
  try {
    const response = await axios({method, baseURL, url, headers, params, data});
    return response;
  } catch(err: any) {
    throw err.response;
  }
};