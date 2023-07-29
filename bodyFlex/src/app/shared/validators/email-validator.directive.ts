import { Directive, Input, OnChanges, SimpleChanges } from '@angular/core';
import {
  AbstractControl,
  NG_VALIDATORS,
  ValidationErrors,
  Validator,
  ValidatorFn
} from '@angular/forms'
import { emailValidator } from './email-validator';

@Directive({
  selector: '[appEmailValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: EmailValidatorDirective,
      multi: true,
    }
  ]
})
export class EmailValidatorDirective implements Validator, OnChanges {
  @Input() email: string[] = [];

  validator: ValidatorFn = () => null;

  constructor() { }
  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    return this.validator(control);
  }

  ngOnChanges(changes: SimpleChanges): void {
    const emailChange = changes['email'];
    if (emailChange) {
      this.validator = emailValidator(emailChange.currentValue);
    }
  }
}
