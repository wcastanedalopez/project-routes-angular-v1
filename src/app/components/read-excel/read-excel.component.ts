import { Component, OnInit } from '@angular/core';
import { RouteService } from 'src/app/services/route.service';

@Component({
  selector: 'app-read-excel',
  templateUrl: './read-excel.component.html',
  styleUrls: ['./read-excel.component.scss']
})
export class ReadExcelComponent implements OnInit{

  listRoutes: string[] = [];

  constructor(private routeService: RouteService){}
  ngOnInit(): void {
  }

  

  readExcelFile(event: Event): void {
    alert("Cliquear en el botón 'Generar tabla'");
    const target = event.target as HTMLInputElement;
    const file: File | null = target.files?.[0] || null;
    if (file) {
          
      this.routeService.getRoutes(file).subscribe({
        next: (response: string[]) => {
        //alert(response.toString())
        this.listRoutes= response;
        
      },
         
        error: (error) => console.error(`${error}`),
        complete: () => {
        console.info('Request API Spring Boot completed');
        }
      },
      );
      
      //this.listRoutes = this.routeService.getRoutesNoObservable(file);
      
    }
  }


}
