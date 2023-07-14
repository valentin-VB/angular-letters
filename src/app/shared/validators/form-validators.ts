import { AbstractControl, ValidationErrors } from "@angular/forms";


export class CustomFormValidators  {
  public static arrayValidator(control:AbstractControl<any[]>): ValidationErrors | null {
    const value: any[] = control.value;

    if (!value || !value.length) {
      return {
        error: "Expected at least one value"
      };
    }

    return null;
  }
}
