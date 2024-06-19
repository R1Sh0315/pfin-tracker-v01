import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'pft-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Output() buttonClicked = new EventEmitter<void>();
  @Input() title: string=''
  @Input() btnType: string = 'btn-outline-primary'
  @Input() isFull?: boolean=false


  onClick() {
    this.buttonClicked.emit();
  }
}
