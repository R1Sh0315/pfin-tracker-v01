import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ControllerComponent} from './controller/controller.component'


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    ControllerComponent
    
  ],
  exports: [
    ControllerComponent
  ]
})
export class MoleculesModule {}