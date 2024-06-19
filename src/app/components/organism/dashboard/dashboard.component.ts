import { Component } from '@angular/core';
import {AtomsModule} from '../../atom/atom.module'
@Component({
  selector: 'pft-dashboard',
  standalone: true,
  imports: [AtomsModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  onClickHandler():void{
    console.log('hello')
  }
}
