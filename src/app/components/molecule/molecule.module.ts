import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ControllerComponent} from './controller/controller.component'
import {PopUpFormComponent} from './pop-up-form/pop-up-form.component'

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    ControllerComponent,
    PopUpFormComponent
    
  ],
  exports: [
    ControllerComponent,
    PopUpFormComponent
  ]
})
export class MoleculesModule {}