import { Identifiable } from "..";

export interface IUser extends Identifiable {
  name: string;
  username: string;
  password: string; 
}