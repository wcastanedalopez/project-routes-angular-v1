import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { RoutesPageComponent } from './pages/routes-page/routes-page.component';
import { RoutesDetailPageComponent } from './pages/routes-detail-page/routes-detail-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material/material.module';

import { HttpClientModule } from '@angular/common/http';
import { ReadExcelComponent } from './components/read-excel/read-excel.component';
import { NavComponent } from './components/nav/nav.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginFormComponent } from './components/forms/login-form/login-form.component';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import { LoadFileExcelComponent } from './pages/load-file-excel/load-file-excel.component';
import { AuxPageComponent } from './pages/aux-page/aux-page.component';
import { InitPageComponent } from './pages/init-page/init-page.component';

import { MdbCollapseDirective } from './directives/mdb-collapse.directive';
import { RoutesManageComponent } from './pages/routes-manage/routes-manage.component';
import { EmployeesManageComponent } from './pages/employees-manage/employees-manage.component';
import { ShowEmployeesPageComponent } from './pages/show-employees-page/show-employees-page.component';
import { TableCrudEmployeesComponent } from './components/table-crud-employees/table-crud-employees.component';
import { AddEmployeeDialogComponentComponent } from './components/add-employee-dialog-component/add-employee-dialog-component.component';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    LoginPageComponent,
    NotFoundPageComponent,
    RoutesPageComponent,
    RoutesDetailPageComponent,
    ReadExcelComponent,
    NavComponent,
    DashboardComponent,
    LoginFormComponent,
    LoadFileExcelComponent,
    AuxPageComponent,
    InitPageComponent,
    MdbCollapseDirective,
    RoutesManageComponent,
    EmployeesManageComponent,
    ShowEmployeesPageComponent,
    TableCrudEmployeesComponent,
    TableCrudEmployeesComponent,
    AddEmployeeDialogComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    MaterialModule,
    HttpClientModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,

    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
