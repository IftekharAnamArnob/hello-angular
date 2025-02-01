import { Component,EventEmitter,Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {

  @Input() btntext: string = '';

  @Input() btnClass: string = '';

  @Output() btnClick = new EventEmitter<any>();

  onClick() {
    debugger;
    this.btnClick.emit("Hi I am from Child!");
  }

}
