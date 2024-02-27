import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function forbidHtmlTagsValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const forbidden = /<[^>]*>/g.test(control.value);
    return forbidden ? { forbiddenHtmlTags: { value: control.value } } : null;
  };
}
