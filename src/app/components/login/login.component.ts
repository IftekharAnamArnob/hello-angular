import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  userObj: any = {
    userName: '',
    password: ''
  };

  router = inject(Router)

  onLogin() {
    if(this.userObj.userName === 'admin' && this.userObj.password === '1234'){
      alert('Login Successful');
      localStorage.setItem("user",this.userObj.userName);
      this.router.navigateByUrl('add-employee');
   
  }

  else if(this.userObj.userName === 'Iftekhar' && this.userObj.password === 'lonewolf'){
    alert('Login Successful');
    localStorage.setItem("user",this.userObj.userName);
    this.router.navigateByUrl('add-employee');
  }

  else{
    alert('Invalid Credentials');
  }
 
}




}
