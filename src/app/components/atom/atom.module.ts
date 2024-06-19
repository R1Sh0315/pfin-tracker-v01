import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input/input.component'
import { ButtonComponent } from './button/button.component'

@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    InputComponent,
    ButtonComponent
  ],
  exports: [
    InputComponent,
    ButtonComponent
  ]
})
export class AtomsModule {}
