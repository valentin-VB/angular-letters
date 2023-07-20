import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { FormControlDialogComponent } from '../form-control-dialog/form-control-dialog.component';

@Component({
  selector: 'app-letter-form-control',
  templateUrl: './letter-form-control.component.html',
  styleUrls: ['./letter-form-control.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => LetterFormControlComponent),
    },
  ],
})
export class LetterFormControlComponent implements ControlValueAccessor {
  @Input() values!: string[];
  @Input() placeholder!: string;

  onChange: (values: string[]) => void;

  constructor(private dialog: MatDialog) {}

  writeValue(values: string[]): void {
    this.values = values;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {}

  openDialog() {
    const data = {
      title: this.placeholder,
      values: this.values,
    };
    const dialogRef = this.dialog.open(FormControlDialogComponent, {
      data,
    });

    dialogRef.afterClosed().subscribe((res) => {
      if (res) {
        this.writeValue(res);
        this.onChange(res);
      }
    });
  }
}
