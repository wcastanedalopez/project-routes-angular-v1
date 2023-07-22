import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IRoute } from '../models/route.interface';
import { Observable } from 'rxjs';


const AUTH_API = 'http://localhost:8080/api/route';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class LoadDataService {
  //private apiUrl: string = 'http://localhost:8080'; 

  constructor(private http: HttpClient) { }

  getData(): Observable<IRoute[]> {
    return this.http.get<IRoute[]>( AUTH_API );
  }
  pushRoute(data: IRoute) {
    return this.http.post(AUTH_API, data);
  }

  saveRoutesByList(listRoutes: IRoute[]): Observable<IRoute[]> {
    const url = AUTH_API + "/addList"; // Reemplaza con la URL de tu endpoint en el backend
    return this.http.post<IRoute[]>(url, listRoutes);
  }

  
}
