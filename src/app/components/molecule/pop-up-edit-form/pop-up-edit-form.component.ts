import { Component, Output, EventEmitter, Input, OnChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AtomsModule } from '../../atom/atom.module';
import { v4 as uuidv4 } from 'uuid';
import {DataService} from '../../../services/data.service'


@Component({
  selector: 'pft-pop-up-edit-form',
  standalone: true,
  imports: [AtomsModule, CommonModule],
  templateUrl: './pop-up-edit-form.component.html',
  styleUrl: './pop-up-edit-form.component.scss'
})
export class PopUpEditFormComponent implements OnChanges{
  constructor(private _dataService: DataService) {}

  @Output() closeClicked = new EventEmitter<void>();
  @Output() saveClicked = new EventEmitter<void>();
  @Input() item: any;

  isIncome: boolean = true;
  amount: string = '';
  description: string = '';

  ngOnChanges() {
    if (this.item) {
      this.isIncome = this.item.type === 'Income';
      this.amount = this.item.type === 'Income'?this.item.amount:-this.item.amount;
      this.description = this.item.description;
    }
  }

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
    const updatedItem = {
      id: this.item.id,
      type: this.isIncome ? 'Income' : 'Expense',
      amount: this.amount,
      description: this.description,
    };
    this._dataService.editData(updatedItem);

    this.closeClicked.emit();
    this.saveClicked.emit();
  }
}
