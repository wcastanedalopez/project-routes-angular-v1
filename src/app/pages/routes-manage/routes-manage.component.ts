import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-routes-manage',
  templateUrl: './routes-manage.component.html',
  styleUrls: ['./routes-manage.component.scss']
})
export class RoutesManageComponent {

  constructor(private router: Router) {}

  showRoutes() {
    this.router.navigate(['dashboard/routes']);
  }
}
