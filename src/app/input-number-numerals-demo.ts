import { Component } from '@angular/core';
import { ImportsModule } from './imports';
import { InputNumber } from 'primeng/inputnumber';
import { Fluid } from 'primeng/fluid';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'input-number-numerals-demo',
    templateUrl: './input-number-numerals-demo.html',
    standalone: true,
    imports: [ImportsModule]
})
export class InputNumberNumeralsDemo {
    value1: number = 42723;

    value2: number = 58151;

    value3: number = 2351.35;

    value4: number = 50;

    lastValidValue: number | null = null;


    get isOverMax(): boolean {
        return !!this.value1 && this.value1 > 999;
      }
      form: FormGroup;
      showTooltip = false;


      constructor(private fb: FormBuilder) {
        this.form = this.fb.group({
          value: [null,
            [
              Validators.required,
              Validators.min(1),
              Validators.max(999),
              Validators.pattern('^[0-9]*$')
            ]
          ]
        });
      }
      ngOnInit() {
        this.form.get('value')!.valueChanges.subscribe(val => {
          if (
            // val === null ||
            // val === undefined ||
            // val === '' ||
            // isNaN(val) ||
            // val < 1 ||
            val > 999  //||
            // !/^\d+$/.test(String(val))
          ) {
            this.showTooltip = false;
        setTimeout(() => this.showTooltip = false, 3000);

            // If invalid, reset to last valid value
            setTimeout(() => {
              this.form.get('value')!.setValue(this.lastValidValue, { emitEvent: false });
            });
          } else {
            // If valid, store as last valid value
            this.lastValidValue = val;
          }
        });
      }
    
      isOverMaxx() {
        return this.form.get('value')?.value > 999;
      }
    
      isInvalid() {
        const ctrl = this.form.get('value');
        return ctrl?.invalid && (ctrl.dirty || ctrl.touched);
      }
    
}