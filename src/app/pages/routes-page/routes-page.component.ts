import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { IRoute } from 'src/app/models/route.interface';
import { LoadDataService } from 'src/app/services/load-data.service';
import jspdf from 'jspdf';
import 'jspdf-autotable';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-routes-page',
  templateUrl: './routes-page.component.html',
  styleUrls: ['./routes-page.component.scss'],
})
export class RoutesPageComponent implements OnInit {
  displayedColumns: string[] = ['SECTOR', 'SEDE', 'NAME']; //Header table of html
  dataSource: IRoute[] = []; //Dataset of table html
  centi: boolean = false; //Control view table or option for load excel
  centiLoadFile: boolean = false; 

  //table pdf
  header = [this.displayedColumns];
  tableData: any = [];

  constructor(
    private loadDataService: LoadDataService,
    private cdr: ChangeDetectorRef,
    private router: Router,
    private location: Location
  ) {}
  ngOnInit(): void {
    //this.router.navigate(['/dashboard/routes']);
    //Method that load data of routes from Api Rest Spring Boot
    /**
    this.loadDataService.getData().subscribe((response: IRoute[]) => {
      this.dataSource = response;
      console.log(this.dataSource);
      setTimeout(() => {
        // Instrucción a ejecutar después de 2 segundos
        this.centi = true; //For that render data in table interface
      }, 300);

      this.cdr.detectChanges(); // Forzar detección de cambios
    });
 */
    this.loadDataService.getData().subscribe({
      next: (response: IRoute[]) => {
        this.dataSource = response;
        console.log(this.dataSource);
        setTimeout(() => {
          // Instrucción a ejecutar después de 2 segundos
          this.centi = true; //For that render data in table interface
        }, 300);
  
        this.cdr.detectChanges(); // Forzar detección de cambios
      },
      error: (err) => {
        console.log('Error al cargar rutas');
        setTimeout(() => {
          // Instrucción a ejecutar después de 2 segundos
          this.centiLoadFile = true; //For that render data in table interface
        }, 300);
      },
      complete: () => console.info('Process authentication completed')  
    });
  }
  loadFile() {
    this.router.navigate(['dashboard/loadFile']);
  }

  /**
   * Method that filled the array tableData
   */
  preparateArrayTable() {
    let auxArray: string[] = [];
    this.dataSource.forEach((element) => {
      auxArray.push(element.sector);
      auxArray.push(element.sede);
      auxArray.push(element.name);
      this.tableData.push(auxArray);
      auxArray = [];
    });
    console.log(this.tableData);
  }

  generatePDF() {
    this.preparateArrayTable();

    const pdf = new jspdf();

    // Obtener la altura del encabezado y el espacio adicional deseado
    const headerHeight =
      pdf
        .setFontSize(20)
        .splitTextToSize('PDF File in Angular in Routes Project', 180).length *
      7;
    const spacing = 10; // Espacio adicional deseado entre el título y la tabla

    // Calcular la posición vertical del título centrado
    const titlePosition = (pdf.internal.pageSize.height - headerHeight) / 12;

    // Imprimir el título centrado
    pdf.text(
      'List routes susceptible to be assigned'.toUpperCase(),
      pdf.internal.pageSize.width / 2,
      titlePosition,
      { align: 'center' }
    );

    // Calcular la posición vertical de inicio de la tabla
    const tableStartY = titlePosition + headerHeight + spacing;

    // Configuración de la tabla con el tema 'striped' (rayado)
    const tableOptions = {
      startY: tableStartY,
      startX: 90,
      theme: 'striped',
      headStyles: { fillColor: [41, 128, 185], textColor: 255 },
      bodyStyles: { fillColor: 255 },
      didDrawCell: (data: any) => {
        if (data.row.raw % 2 === 0) {
          const { x, y, width, height } = data.cell;
          pdf.setFillColor(230, 230, 230);
          pdf.rect(x, y, width, height, 'F');
        }
      },
    };

    // Generar la tabla con el tema 'striped'
    (pdf as any).autoTable({
      head: this.header,
      body: this.tableData,
      ...tableOptions,
    });

    // Guardar el archivo PDF
    pdf.save('table.pdf');
  }

  goBack(): void {
    this.location.back();
  }
}
