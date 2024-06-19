import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AtomsModule } from '../../atom/atom.module';
import { MoleculesModule } from '../../molecule/molecule.module';
import { DataService } from '../../../services/data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'pft-dashboard',
  standalone: true,
  imports: [AtomsModule, CommonModule, MoleculesModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent implements OnInit {
  private dataSubscription!: Subscription;
  constructor(private _dataService: DataService) {}

  isPopUp: boolean = false;
  isEdit: boolean = false;
  data: any[] = [];
  editItem: any = null;
  total: number = 0;

  ngOnInit(): void {
    this.dataSubscription = this._dataService.data$.subscribe((data) => {
      this.data = data;
      this.calculateTotal();
    });
  }

  ngOnDestroy(): void {
    if (this.dataSubscription) {
      this.dataSubscription.unsubscribe();
    }
  }

  // onClickHandler():void{
  //   this.isPopUp=!this.isPopUp
  //   console.log('hello')
  // }

  onCloseHandler(): void {
    this.isPopUp = false;
    this.editItem = null;
  }

  onEditHandler(id: string): void {
    this.editItem = this.data.find((item) => item.id === id);
    this.isPopUp = true;
    this.isEdit = true;
  }

  onDeleteHandler(id: string): void {
    this._dataService.deleteData(id);
    this.calculateTotal();
  }

  onSaveHandler(): void {
    this.isPopUp = false;
    this.editItem = null;
    this.calculateTotal();
  }
  onAddClick(): void {
    this.isPopUp = true;
    this.isEdit = false;
  }

  private calculateTotal(): void {
    this.total = this.data.reduce(
      (sum, item) => sum + parseInt(item.amount),
      0
    );
  }
}
