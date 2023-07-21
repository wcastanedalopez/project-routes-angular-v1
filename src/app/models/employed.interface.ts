import { ITeam } from "./team.interface";

export interface IEmployed {
  username: string;
  password: string;
  phone: string;
  name: string;
  lastName: string;
  email: string;
  team: ITeam;
}