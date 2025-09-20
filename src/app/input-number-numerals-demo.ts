import { Component } from '@angular/core';
import { ImportsModule } from './imports';
import { InputNumber } from 'primeng/inputnumber';
import { Fluid } from 'primeng/fluid';

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
}