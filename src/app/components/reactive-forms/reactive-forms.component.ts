import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  standalone: true,
  imports: [FormsModule,JsonPipe],
  templateUrl: './reactive-forms.component.html',
  styleUrl: './reactive-forms.component.css'
})
export class ReactiveFormsComponent {

   studentObj: any = {
     firstName: '',
     lastName: '',
     userName: '',
     city: '',
     state: '',
     zipCode: '',
     isAcceptTerms: false
   }

   formValue:any;

   onSubmit(){
    this.formValue = this.studentObj;
   }


}
