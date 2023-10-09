import axios, {AxiosRequestConfig} from "axios";

interface RequestOptions {
  method?: string;
  headers?: any;
  body?: any;
}
export const request = async (url: string, options: RequestOptions = {}) => {
  const axiosConfig: AxiosRequestConfig = {
    url,
    method: options.method || 'GET',
    headers: options.headers || {},
    data: options.body || {},
  }
  const response = axios.request(axiosConfig).then((res) => res.data);

  return response;
};
