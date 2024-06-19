import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private storageKey = 'data';
  private dataSubject = new BehaviorSubject<any[]>(
    this.getDataFromLocalStorage()
  );

  data$ = this.dataSubject.asObservable();

  constructor() {}

  private getDataFromLocalStorage(): any[] {
    if (typeof localStorage !== 'undefined') {
      const data = localStorage.getItem(this.storageKey);
      return data ? JSON.parse(data) : [];
    }
    return [];
  }

  getData(): any[] {
    return this.dataSubject.value;
  }

  setData(data: any[]): void {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem(this.storageKey, JSON.stringify(data));
      this.dataSubject.next(data);
    }
  }

  addData(newItem: any): void {
    const currentData = this.getData();
    currentData.push(newItem);
    this.setData(currentData);
  }

  editData(updatedItem: any): void {
    const currentData = this.getData().map(item =>
      item.id === updatedItem.id ? updatedItem : item
    );
    this.setData(currentData);
  }

  deleteData(id: string): void {
    const currentData = this.getData().filter(item => item.id !== id);
    this.setData(currentData);
  }
}
