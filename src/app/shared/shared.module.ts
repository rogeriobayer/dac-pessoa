import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NumericoDirective, MinimoValidatorDirective } from './directives';
import { MeuPipePipe } from './pipes';

@NgModule({
  declarations: [  NumericoDirective, MinimoValidatorDirective, MeuPipePipe],
  imports: [
    CommonModule
  ],
  exports:[
    MeuPipePipe,
    MinimoValidatorDirective, NumericoDirective
  ]
})
export class SharedModule { }
