import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {

  courseName: string = "Angular 18";

  inputType = "text";

  rollNo: number = 123;

  isIndian: boolean = false;

  constructor(){

  }

  handleClick(message: string) {
    alert(message);
  }


}
