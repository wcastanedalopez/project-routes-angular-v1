import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IRoute } from '../models/route.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadDataService {
  private apiUrl = 'http://localhost:8000'; 

  constructor(private http: HttpClient) { }

  getData(): Observable<IRoute[]> {
    return this.http.get<IRoute[]>(`${this.apiUrl}/route`);
  }
  pushRoute(data: IRoute) {
    return this.http.post(`${this.apiUrl}/routes`, data);
  }

  saveRoutesByList(listRoutes: IRoute[]): Observable<IRoute[]> {
    const url = 'http://localhost:8000/route/addList'; // Reemplaza con la URL de tu endpoint en el backend
    return this.http.post<IRoute[]>(url, listRoutes);
  }

  
}
