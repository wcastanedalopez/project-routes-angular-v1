import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { RoutesPageComponent } from './pages/routes-page/routes-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { authGuard } from './guards/auth.guard';
import { LoadFileExcelComponent } from './pages/load-file-excel/load-file-excel.component';
import { AuxPageComponent } from './pages/aux-page/aux-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { RoutesManageComponent } from './pages/routes-manage/routes-manage.component';
import { EmployeesManageComponent } from './pages/employees-manage/employees-manage.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard'
  },
  {
    path: 'login',
    component: LoginPageComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [authGuard],
    children: [
      {
        path: '',
        component: HomePageComponent
      },
      {
        path: 'login',
        component: LoginPageComponent
      },
      {
        path: 'home',
        component: HomePageComponent
      },
      {
        path: 'routesManage',
        component: RoutesManageComponent,
      },
      {
        path: 'routes',
        component: RoutesPageComponent
      },
      {
        path: 'employeesManage',
        component: EmployeesManageComponent
      },
      {
        path: 'loadFile',
        component: LoadFileExcelComponent
      },
      {
        path: 'aux',
        component: AuxPageComponent
      },
    ]
  },
  {
    path: '**',
    component: NotFoundPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
