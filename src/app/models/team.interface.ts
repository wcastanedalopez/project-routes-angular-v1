import { IAssignment } from "./assignment.interface";
import { IEmployed } from "./employed.interface";

export interface ITeam {
    name: string;
    employeesList: IEmployed[];
    assignments: IAssignment[];
}