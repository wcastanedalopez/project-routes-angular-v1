import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddEmployeeDialogComponentComponent } from '../add-employee-dialog-component/add-employee-dialog-component.component';


@Component({
  selector: 'app-table-crud-employees',
  templateUrl: './table-crud-employees.component.html',
  styleUrls: ['./table-crud-employees.component.scss']
})
export class TableCrudEmployeesComponent {

  employees = [
    {
      id: 1,
      name: "Thomas Hardy",
      lastname: "89 Chiaroscuro Rd.",
      email: "Portland",
      phone: "97219",
      team: "Team 1",
    },
    {
      id: 2,
      name: "Maria Anders",
      lastname: "Obere Str. 57",
      email: "Berlin",
      phone: "12209",
      team: "Team 1",
    },
    // Agrega más objetos de empleados según necesites
  ];

  constructor(private dialog: MatDialog) {}

  openAddEmployeeDialog(): void {
    const dialogRef = this.dialog.open(AddEmployeeDialogComponentComponent, {
      width: '400px', // Tamaño del diálogo
    });

    dialogRef.afterClosed().subscribe((newEmployeeData) => {
      if (newEmployeeData) {
        // Agregar el nuevo empleado a la lista de empleados
        this.employees.push(newEmployeeData);
      }
    });
  }
}
