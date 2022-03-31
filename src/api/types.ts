export interface IUserListItemResponse {
  name: string;
  lastName: string;
}

export interface IUserListResponse {
  data: IUserListItemResponse[];
}
