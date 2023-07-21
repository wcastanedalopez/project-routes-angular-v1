import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {

  

  let token = sessionStorage.getItem('auth-token');



  if(token) {
    return true;
  } else {
    window.location.href = '/login'; 
    return false;
  }
};
