import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';



@Component({
  selector: 'app-add-employee-dialog-component',
  templateUrl: './add-employee-dialog-component.component.html',
  styleUrls: ['./add-employee-dialog-component.component.scss']
})
export class AddEmployeeDialogComponentComponent {
  employeeForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<AddEmployeeDialogComponentComponent>
  ) {
    this.employeeForm = this.formBuilder.group({
      name: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      team: ['', Validators.required],

    });
  }

  onSaveClick(): void {
    // Guardar los datos del empleado y cerrar el diálogo
    const newEmployeeData = this.employeeForm.value;
    this.dialogRef.close(newEmployeeData);
  }

  onCancelClick(): void {
    // Cerrar el diálogo sin guardar
    this.dialogRef.close();
  }
}
