import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {

   debugger;
  const router = inject(Router);
  const userData = localStorage.getItem("user");

  if(userData!= null){
    return true;
  }
  else{
    router.navigateByUrl('login');
    return false;
  }


};
