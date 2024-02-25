export interface IUserLoginDTO {
  username: string;
  password: string;
}

export interface IUserCreateDTO extends IUserLoginDTO {
  name: string;
}
