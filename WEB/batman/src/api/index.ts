import axios from "axios";

export default class API {
  BASE_URL = "http://127.0.0.1:8081/";

  get = async <T>(path: string): Promise<Awaited<T>> => {
    const res = await axios.get(this.BASE_URL + path);
    const data = await (res.data as string);

    return JSON.parse(data);
  };

  mutate = async (
    method: "post" | "put" | "delete",
    path: string,
    data: any
  ) => {
    const res = await axios({ method, url: this.BASE_URL + path, data });
    return await res.data;
  };
}
