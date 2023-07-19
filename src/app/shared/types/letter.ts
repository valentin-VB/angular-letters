import { FormArray, FormControl } from '@angular/forms';

export interface Letter {
  id: string | undefined;
  senderAddress: string;
  receiverAddress: string[];
  blockA: string[];
  subject?: string;
  body: string;
  footNote?: string;
}

export interface DialogData {
  title: string;
  values: string[];
}

export interface FormModel {
  values: FormArray<FormControl<string>>;
}
