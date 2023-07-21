import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IRoute } from 'express';
import { AuthService } from 'src/app/services/auth.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  form: any = {
    username: null,
    password: null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  constructor(private router: Router, private authService: AuthService, private tokenStorage: TokenStorageService) {}
  
  ngOnInit(): void {

    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
      //this.router.navigate(['/dashboard/home']);
    }

  }


  loginUser(value: any): void {
    const { username, password } = value;

    this.authService.login(username, password).subscribe({
      next: (data) => {
        this.tokenStorage.saveToken(data.accessToken);
        console.log(data.accessToken);
        this.tokenStorage.saveUser(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser().roles;
        //this.router.navigate(['/dashboard/home']);
        this.router.navigate(['/']);
        //this.reloadPage();
      },
      error: (err) => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      },
      complete: () => console.info('Process authentication completed')  
  });
  }

  reloadPage(): void {
    window.location.reload();
  }







  loginUser2(value: any) {
    let {username, password} = value;
    //sessionStorage.setItem('token', '123456789');
    this.authService.login(username, password).subscribe({
      next: (response: any) => { 
        
        console.log(response.token);

        if( response) {
          console.log(response);
          
          console.log('Login successful!');
          //sessionStorage.setItem('token', response);
          //window.location.href = '/home';
          //this.router.navigate(['/']);
        } else {
          console.log('Dit not enter the response.token');
        }
      },
      error: (error) => console.error(`Has error in authentication: ${ error}`),
      complete: () => console.info('Process authentication completed')  
  });
    
  }
  


 

}
