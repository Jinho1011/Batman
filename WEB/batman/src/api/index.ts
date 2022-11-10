import axios from "axios";

export default class API {
  BASE_URL =
    !process.env.NODE_ENV || process.env.NODE_ENV === "development"
      ? "http://127.0.0.1:8080/"
      : "http://batman.api.default.svc.cluster.local:8080/";

  get = async <T>(path: string): Promise<T> => {
    const res = await axios.get(this.BASE_URL + path);
    const data = await (res.data as T);

    return data;
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
