import { useQuery } from "react-query";
import { SharedApi } from "../api";
import { IUserList } from "../types";

const api = SharedApi.getInstance();

export const useUserList = () => {
  const { data, isLoading } = useQuery<IUserList>(api.getUserListUrl(), () =>
    api.getUserList()
  );

  return { users: data?.users, isLoading };
};
