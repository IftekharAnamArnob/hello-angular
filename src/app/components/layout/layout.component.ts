import { Component, inject } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterModule, RouterOutlet],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

  
  router = inject(Router);

  loggedUserData: any;
   
   constructor(){
     const userData = localStorage.getItem("user");
     if(userData!=null){
       this.loggedUserData = JSON.parse(userData);
     }
   }

   onLogOff(){
     localStorage.removeItem("user");
     this.router.navigateByUrl('login');
   }


}
