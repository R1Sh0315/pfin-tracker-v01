import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControllerComponent } from './controller/controller.component';
import { PopUpFormComponent } from './pop-up-form/pop-up-form.component';
import { PopUpEditFormComponent } from './pop-up-edit-form/pop-up-edit-form.component';

@NgModule({
  declarations: [],
  imports: [CommonModule, ControllerComponent, PopUpFormComponent, PopUpEditFormComponent],
  exports: [ControllerComponent, PopUpFormComponent, PopUpEditFormComponent],
})
export class MoleculesModule {}
