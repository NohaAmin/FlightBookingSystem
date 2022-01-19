import {Injectable} from '@angular/core';
import {AbstractControl, ValidationErrors} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  constructor() {
  }

  noWhiteSpaceValidator(control: AbstractControl): ValidationErrors | null {
    if (!(!control || !control.value || control.value === '')) {
      if ((control.value as string).indexOf(' ') >= 0) {
        return {noWhiteSpace: true}
      }
      return null;
    }
    return null;
  }
}
