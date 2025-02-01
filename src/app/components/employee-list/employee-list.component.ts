import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent {



  constructor(private router: Router){

  }

  navigatetoAddEmployee(){
    // this.router.navigateByUrl("add-employee");
    this.router.navigate(['add-employee']);
  }

}
