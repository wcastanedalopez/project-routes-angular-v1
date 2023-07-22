import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { RouteService } from 'src/app/services/route.service';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { ToastrService } from 'ngx-toastr';
import { IRoute } from 'src/app/models/route.interface';
import { Router } from '@angular/router';
import { response } from 'express';



@Component({
  selector: 'app-load-file-excel',
  templateUrl: './load-file-excel.component.html',
  styleUrls: ['./load-file-excel.component.scss'],
})
export class LoadFileExcelComponent implements OnInit {
  listRoutes: string[] = [];
  listRoutesToSaveBD: IRoute[] = [];
  centi: boolean = false;

  constructor(
    private _formBuilder: FormBuilder,
    private routeService: RouteService,
    private snackBar: MatSnackBar,
    private toastr: ToastrService,
    private router: Router
  ) { }
  ngOnInit(): void {
    //if(history.state.data) {
    //this.listRoutes = history.state.data;
    //}
  }

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });

  actualizarEstadoBoton(): boolean {
    return !this.centi;
  }

  showNotification() {
    const config: MatSnackBarConfig = {
      duration: 3000,
      verticalPosition: 'top',
      panelClass: ['custom-snackbar'], // Agrega la clase CSS personalizada aquí
    };
    this.snackBar.open('The operation was successful', 'Close', config);
  }

  readExcelFile(event: Event): void {
    //this.mostrarNotificacion('La operación fue exitosa');
    this.showNotification();
    const target = event.target as HTMLInputElement;
    const file: File | null = target.files?.[0] || null;
    if (file) {
      this.centi = true;

      this.routeService.getRoutes(file).subscribe({
        next: (response: string[]) => {
          //alert(response.toString())
          this.listRoutes = response;
        },
        error: (error) => console.error(`${error}`),
        complete: () => {
          console.info('Request API Spring Boot completed');
        },
      });
      //this.listRoutes = this.routeService.getRoutesNoObservable(file);
    }
  }
  mostrarNotificacion(msj: string) {
    this.toastr.success(msj, 'Éxito');
  }

  convertStringToIRoute() {

    if (this.centi) {

      const patron = /^(\S+)$/;
      let auxSector: string = 'SIN SECTOR';
      for (let index = 0; index < this.listRoutes.length - 1; index++) {

        let auxRoute: IRoute = {
          name: '',
          sector: auxSector,
          sede: ''
        }
        if (this.listRoutes[index] == 'SECTOR' && this.listRoutes[index + 1] == 'RUTA') {
          console.log('Entra al if -- ' + index);
          index = index + 2;
          if (patron.test(this.listRoutes[index])) {
            //console.log('Aprueba el test dentro del if -- ' + index + '---' + this.listRoutes[index]);
            auxSector = this.listRoutes[index];
            index++;
          }
        }
        //console.log('sale del if ' + index);
        if (patron.test(this.listRoutes[index])) {
          //console.log('Aprueba el test dentro del if 2 -- ' + index + '---' + this.listRoutes[index]);
          auxSector = this.listRoutes[index];
          index++;
        }
        auxRoute.sector = auxSector;

        let partes = this.listRoutes[index].split(' ');
        auxRoute.sede = this.convertFirstLetterToUpperCase(partes.slice(0, 2).join(' '));
        auxRoute.name = this.removeChar(partes.slice(2).join(' '));


        this.listRoutesToSaveBD.push(auxRoute);

        //LIST_ROUTES.push(auxRoute);
      }

      //Saving in BD
      this.routeService.saveRoutes(this.listRoutesToSaveBD).subscribe((response: IRoute[]) => {
        console.log(response);
        //this.mostrarNotificacion('La operación fue exitosa');
        const config: MatSnackBarConfig = {
          duration: 3000,
          verticalPosition: 'top',
          panelClass: ['custom-snackbar'], // Agrega la clase CSS personalizada aquí
        };
        this.snackBar.open('It has been saved in the database', 'Close', config);

      });

      setTimeout(() => {
        // Instrucción a ejecutar después de 2 segundos
        this.router.navigate(['/dashboard/routes']);
      }, 300);
      
      //console.log(this.listRoutesToSaveBD);
    }
  }
  convertFirstLetterToUpperCase(input: string): string {
    if (input.length === 0) {
      return input; // Cadena vacía, no hay cambios necesarios
    }
    const firstLetter = input.charAt(0).toUpperCase(); // Obtener la primera letra y convertirla a mayúscula
    const remainingLetters = input.slice(1); // Obtener el resto de la cadena

    return firstLetter + remainingLetters;
  }

  removeChar(cadena: string): string {
    const patron = /^[^a-zA-Z]*([a-zA-Z].*)$/;
    const coincidencia = cadena.match(patron);
    if (coincidencia) {
      return coincidencia[1];
    }
    return '';

  }
}
