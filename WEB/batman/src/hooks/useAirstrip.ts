import { useMutation, useQuery, UseQueryOptions } from "@tanstack/react-query";
import API from "../api";

const api = new API();
const path = "airstrips";

export interface ISector {
  id: number;
  name: string;
  camURL: string;
  x: string;
  y: string;
  airStripId: number;
}

export interface IAirstrip {
  id: number;
  name: string;
  startZone: string;
  endZone: string;
  sectorList: ISector[];
}

const useAirstrip = (id: number, options?: UseQueryOptions<IAirstrip>) => {
  return useQuery({
    queryKey: [path, id],
    queryFn: () => api.get<IAirstrip>(`${path}/${id}`),
    ...options,
  });
};

const useAirstripMutation = (
  method: "post" | "put" | "delete",
  id?: number
) => {
  return useMutation({
    mutationFn: (body: object) => api.mutate(method, path + "/" + id, body),
  });
};

export { useAirstrip, useAirstripMutation };
