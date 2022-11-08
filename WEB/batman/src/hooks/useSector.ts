import { useMutation } from "@tanstack/react-query";
import API from "../api";

const api = new API();
const path = "sector";

const useSectorMutation = (method: "post" | "put" | "delete", id?: number) => {
  return useMutation({
    mutationFn: (body: object) => api.mutate(method, path + "/" + id, body),
  });
};

export { useSectorMutation };
