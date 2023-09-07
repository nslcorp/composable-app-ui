interface RequestOptions {
  method?: string;
  headers?: any;
  body?: any;
}
export const request = async (url: string, options: RequestOptions = {}) => {
  const response = await fetch(url, options).then((res) => res.json());

  return response;
};
