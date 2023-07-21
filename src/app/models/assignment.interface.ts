import { IRegistration } from "./registration.interface";
import { IRoute } from "./route.interface";
import { ITeam } from "./team.interface";

export interface IAssignment {
    routes: IRoute[];
    team: ITeam;
    registration: IRegistration;
    date: Date;
}