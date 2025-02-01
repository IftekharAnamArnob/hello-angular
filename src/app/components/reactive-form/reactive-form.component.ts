import { state } from '@angular/animations';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent {

  studentForm = new FormGroup({ 
    firstName: new FormControl("",[Validators.required, Validators.minLength(3)]),
    lastName: new FormControl(""),
    userName: new FormControl("",[Validators.email]),
    city: new FormControl(""),
    state: new FormControl(""),
    zipCode: new FormControl(""),
    isAcceptTerms: new FormControl("")
  });

  formvalue:any;

  onSubmit(){
    this.formvalue = this.studentForm.value;
    console.log(this.formvalue);
  }

}
