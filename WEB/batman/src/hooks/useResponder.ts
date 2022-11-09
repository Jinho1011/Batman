import { useMutation, useQuery, UseQueryOptions } from "@tanstack/react-query";
import API from "../api";

const api = new API();
const path = "responders/";

export interface IResponder {
  id: number;
  airStripId: number;
  type: string;
  name: string;
  detail: string;
  dest: string;
}

const useResponder = (id: number, options?: UseQueryOptions<IResponder[]>) => {
  return useQuery({
    queryKey: [path, id],
    queryFn: () => api.get<IResponder[]>(`${path}${id}`),
    ...options,
  });
};

const useResponderMutation = (
  method: "post" | "put" | "delete",
  id?: number
) => {
  return useMutation({
    mutationFn: (body: object) =>
      api.mutate(method, id ? path + id : path, body),
  });
};

export { useResponder, useResponderMutation };
