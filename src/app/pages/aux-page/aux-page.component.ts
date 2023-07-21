import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aux-page',
  templateUrl: './aux-page.component.html',
  styleUrls: ['./aux-page.component.scss']
})
export class AuxPageComponent implements OnInit {

  cont: number = 0;

  constructor(private router: Router){}
  ngOnInit(): void {
    if(this.cont < 1) {
      this.cont++;
      console.log(this.cont);
      this.router.navigate(['/dashboard/routes']);
      
    }
  }

}
