import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import {MatStepperModule} from '@angular/material/stepper';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

//import { Directive } from '@angular/core';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
  ],
  exports: [
    MatTableModule,
    MatButtonModule,
    MatProgressSpinnerModule,

    MatCardModule,
    MatInputModule,

    MatStepperModule,
    MatSnackBarModule,
    BrowserAnimationsModule,
    ToastrModule, 
    //Directive
    
  ]
})
export class MaterialModule { }
