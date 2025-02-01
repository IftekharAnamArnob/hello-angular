import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AlertBoxComponent } from "../../shareable-components/alert-box/alert-box.component";
import { ButtonComponent } from "../../shareable-components/alert-box/button/button.component";

@Component({
  selector: 'app-get-api',
  standalone: true,
  imports: [AlertBoxComponent, ButtonComponent],
  templateUrl: './get-api.component.html',
  styleUrl: './get-api.component.css'
})
export class GetApiComponent {
   
  userList:any [] = [];

  customerList: any[] = [];


  constructor(private http:HttpClient) { 
    // this.getUser()
    // this.getCustomer()

  }

  getUser(){
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe((res:any) =>{
      this.userList = res;
    })
   
  }

  getCustomer(){
    this.http.get('https://projectapi.gerasim.in/api/RealEstate/GetAllCustomers').subscribe((res:any) =>{
      this.customerList = res.data;
    })

  }


}
