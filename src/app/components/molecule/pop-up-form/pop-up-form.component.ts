import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AtomsModule } from '../../atom/atom.module';
import { v4 as uuidv4 } from 'uuid';
@Component({
  selector: 'pft-pop-up-form',
  standalone: true,
  imports: [AtomsModule, CommonModule],
  templateUrl: './pop-up-form.component.html',
  styleUrl: './pop-up-form.component.scss',
})
export class PopUpFormComponent {
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
    console.log(data)
    // Store data in localStorage
    const storedData = JSON.parse(localStorage.getItem('data') || '[]');
    storedData.push(data);
    localStorage.setItem('data', JSON.stringify(storedData));

    // Clear inputs after save
    this.amount = '';
    this.description = '';

    // Close popup form
    this.closeClicked.emit();
  }
}
