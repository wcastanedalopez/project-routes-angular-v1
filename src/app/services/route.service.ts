import { Injectable } from '@angular/core';
import { ReadFileExcelService } from './read-file-excel.service';
import { Observable, of } from 'rxjs';
import { LoadDataService } from './load-data.service';
import { IRoute } from '../models/route.interface';
import { response } from 'express';

@Injectable({
  providedIn: 'root'
})
export class RouteService {

  listRoutes: string[] | undefined;

  constructor(private readFileExcel: ReadFileExcelService, private loadData: LoadDataService) { }

 
  getRoutes(file: File): Observable<string[]>  {
    return of(this.readFileExcel.readExcelFile(file));
  }

  getRoutesNoObservable(file: File): string[] {
    return this.readFileExcel.readExcelFile(file);
  }
 
  loadDataApi():Observable<IRoute[]> {  
    this.loadData.getData().subscribe((response: IRoute[])=> {
      return of(response)
    });
    return of([]);
  } 
  saveRoutes(routes: IRoute[]): Observable<IRoute[]> {
    this.loadData.saveRoutesByList(routes).subscribe((response: IRoute[]) => {
      return of(response)
    });
    return of([]);
  }
}
