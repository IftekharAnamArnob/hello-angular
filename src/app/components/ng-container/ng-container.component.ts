import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-ng-container',
  standalone: true,
  imports: [CommonModule],
  providers: [],
  templateUrl: './ng-container.component.html',
  styleUrl: './ng-container.component.css'
})
export class NgContainerComponent {
  
  isContainer: boolean = true;

  userList: any[] = [];
  isAPI: boolean = false;

  http = inject(HttpClient);

  getUsers(){ 
    this.isAPI=true;
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe((res: any) => {
      this.userList = res;
      this.isAPI=false;
    });

  }

}
