import { AbstractControl } from '@angular/forms';

export function ValidatePassword(control: AbstractControl) {
 if (control.value.includes('guest')){
    return null;
  }else{
  return { validUrl: true };
  }
  }
  