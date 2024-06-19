import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AtomsModule} from '../../atom/atom.module'
@Component({
  selector: 'pft-pop-up-form',
  standalone: true,
  imports: [AtomsModule, CommonModule],
  templateUrl: './pop-up-form.component.html',
  styleUrl: './pop-up-form.component.scss'
})
export class PopUpFormComponent {
  @Output() closeClicked = new EventEmitter<void>();
  
  isIncome:boolean =true

  onClose(){
    this.closeClicked.emit()
  }

  onClickHandler(val:string):void{
    if(val=="Expense"){
      this.isIncome=false
    }else{
      this.isIncome=true
    }
    console.log(val)

  }
}
