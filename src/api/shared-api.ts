import { IUserList } from "../types";
import { IUserListResponse, IUserListItemResponse } from "./types";

const fakeFetch = (url: string) =>
  Promise.resolve<IUserListResponse>({
    data: [
      {
        lastName: "as",
        name: "asda",
      },
      {
        lastName: "asda",
        name: "asdasd",
      },
    ],
  });

export class SharedApi {
  public getUserListUrl() {
    return "/api/user-list";
  }

  private mapGetUserList(data: IUserListItemResponse[]): IUserList {
    return { users: data.map((u) => ({ lastname: u.lastName, name: u.name })) };
  }

  public async getUserList(): Promise<IUserList> {
    const res = await fakeFetch(this.getUserListUrl());
    return this.mapGetUserList(res.data);
  }
}
