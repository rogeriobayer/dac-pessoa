import { Directive, Input, OnInit } from '@angular/core';
import { AbstractControl, FormControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[valorMinimo]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: MinimoValidatorDirective,
      multi: true
    }
  ]
})
export class MinimoValidatorDirective implements Validator, OnInit{
  @Input('valorMinimo') valorMinimo: string = '0';
  constructor() { }

  // OnInit
  ngOnInit() {}

  // Validator
  validate(control: FormControl): ValidationErrors | null {
    let v: number = +control.value;
    let minimo: number = +this.valorMinimo;

    if(isNaN(v)) {
      return {"valorMinimo": minimo, "requiredValue": minimo};
    }else if (v < minimo){
      return {"valorMinimo": minimo, "requiredValue": minimo};
    }

    return null;
  }

}