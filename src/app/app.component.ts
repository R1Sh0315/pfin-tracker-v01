import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {  TestComponent } from './components/test/test.component'
import  {MoleculesModule} from './components/molecule/molecule.module'
import {OrganismsModule} from './components/organism/organism.module'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TestComponent, MoleculesModule, OrganismsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'finance-tracker';
}
