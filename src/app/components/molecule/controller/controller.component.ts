import { Component } from '@angular/core';
import {AtomsModule} from '../../atom/atom.module'

@Component({
  selector: 'pft-controller',
  standalone: true,
  imports: [AtomsModule],
  templateUrl: './controller.component.html',
  styleUrl: './controller.component.scss'
})
export class ControllerComponent {

}
