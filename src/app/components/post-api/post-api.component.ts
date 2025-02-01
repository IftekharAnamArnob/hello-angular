import { JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AlertBoxComponent } from "../../shareable-components/alert-box/alert-box.component";
import { ButtonComponent } from "../../shareable-components/alert-box/button/button.component";


@Component({
  selector: 'app-post-api',
  standalone: true,
  imports: [FormsModule, JsonPipe, AlertBoxComponent, ButtonComponent],
  templateUrl: './post-api.component.html',
  styleUrl: './post-api.component.css'
})
export class PostApiComponent implements OnInit,OnDestroy {
  
  deptObj: any = {
    
      "departmentId": 0,
      "departmentName": "",
      "departmentLogo": ""
    
  }; 

  deptList: any []=[];
 
  ngOnInit(): void {
    this.getDept();
  }

  ngOnDestroy(): void {
    console.log("Component destroyed");
  }


  http = inject(HttpClient);

  onSave(){
    this.http.post('https://projectapi.gerasim.in/api/Complaint/AddNewDepartment', this.deptObj).subscribe((res:any) => {
       if(res.result){
        alert("Department added successfully");
        this.getDept();
       }
       else{
        alert(res.message);
       }
    });
  }

  onUpdate(){
    this.http.post('https://projectapi.gerasim.in/api/Complaint/UpdateDepartment', this.deptObj).subscribe((res:any) => {
      if(res.result){
       alert("Department updated successfully");
       this.getDept();
      }
      else{
       alert(res.message);
      }
   });

  }

  onEdit(data:any){
    this.deptObj = data;

  }

  onDelete(id: number){
    debugger;
    const confirmed = confirm('Are you sure you want to delete this department?');
    
    if(confirmed){
      this.http.delete('https://projectapi.gerasim.in/api/Complaint/DeleteUserByUserId?userId='+ id).subscribe((res:any) => {
        if(res.result){
         alert("Department deleted successfully");
         this.getDept();
        }
        else{
         alert(res.message);
        }
     });

    }
  }

  getData(data:any){
    debugger;

  }

  getDept(){
    this.http.get('https://projectapi.gerasim.in/api/Complaint/GetParentDepartment').subscribe((res:any) =>{
      this.deptList = res.data;
    });

  }

}
