import { HttpClient } from '@angular/common/http';
import { Component, OnInit} from '@angular/core';
import { combineLatest } from 'rxjs';


@Component({
  selector: 'app-combine-latest',
  standalone: true,
  imports: [],
  templateUrl: './combine-latest.component.html',
  styleUrl: './combine-latest.component.css'
})
export class CombineLatestComponent implements OnInit {


   constructor(private http: HttpClient) {}
  ngOnInit(): void {

    let observable1 = this.http.get("https://jsonplaceholder.typicode.com/posts/1");

    let observable2 = this.http.get("https://jsonplaceholder.typicode.com/posts/1/comments");

    let latest = combineLatest([observable1, observable2]).subscribe(([observable1Value, observable2Value])=>{
      console.log(observable1Value);
      console.log(observable2Value);
    })
    
  }
   
  
  



}
