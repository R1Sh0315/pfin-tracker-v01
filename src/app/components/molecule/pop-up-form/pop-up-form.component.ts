import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AtomsModule } from '../../atom/atom.module';
import { v4 as uuidv4 } from 'uuid';
import {DataService} from '../../../services/data.service'

@Component({
  selector: 'pft-pop-up-form',
  standalone: true,
  imports: [AtomsModule, CommonModule],
  templateUrl: './pop-up-form.component.html',
  styleUrl: './pop-up-form.component.scss',
})
export class PopUpFormComponent {
  constructor(private _dataService: DataService) {}

  @Output() closeClicked = new EventEmitter<void>();

  isIncome: boolean = true;
  amount: string = '';
  description: string = '';

  onClose() {
    this.closeClicked.emit();
  }

  onClickHandler(val: string): void {
    if (val == 'Expense') {
      this.isIncome = false;
    } else {
      this.isIncome = true;
    }
    console.log(val);
  }

  onSave() {
    const data = {
      id: uuidv4(),
      type: this.isIncome ? 'Income' : 'Expense',
      amount: this.isIncome ?this.amount:-this.amount,
      description: this.description,
    };
    this._dataService.addData(data)
    console.log(data)

    this.amount = '';
    this.description = '';


    this.closeClicked.emit();
  }
}
