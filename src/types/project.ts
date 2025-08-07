import { IUser } from "./user";

export interface IProject {
  id: number;
  title: string;
  description: string;
  content: string;
  user: IUser;
  coments: number;
  like: number;
  backgroundColor: string;
  language: string;
}
