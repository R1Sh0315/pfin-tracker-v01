import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import {AtomsModule} from '../../atom/atom.module'
import {MoleculesModule} from '../../molecule/molecule.module'

@Component({
  selector: 'pft-dashboard',
  standalone: true,
  imports: [AtomsModule,CommonModule, MoleculesModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  isPopUp:boolean= true
  onClickHandler():void{
    this.isPopUp=!this.isPopUp
    console.log('hello')
  }

  onCloseHandler(): void {
    this.isPopUp = false;
  }
}
