import { Component, OnInit, inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit{

  private breakpointObserver = inject(BreakpointObserver);
  token: string | null = null;

  constructor(private router: Router, private tokenStorage: TokenStorageService) {}

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

    ngOnInit(): void {
      this.token = sessionStorage.getItem('auth-token');
    }

    logout() {
      //sessionStorage.removeItem('auth-token');
      this.tokenStorage.signOut();
      this.router.navigate(['/login']);
      
    }
}
