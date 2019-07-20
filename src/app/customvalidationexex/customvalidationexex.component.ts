import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl,
  FormControl
} from '@angular/forms';

/**
 * Our custom validator
 *
 * A validator:
 * - Takes a `Control` as it's input and
 * - Returns a `StringMap<string, boolean>` where the key is "error code" and
 *   the value is `true` if it fails
 */
function skuValidator(control: FormControl): { [s: string]: boolean } {
  if (!control.value.match(/^123/)) {
    return {invalidSku: true};
  }
}
@Component({
  selector: 'app-customvalidationexex',
  templateUrl: './customvalidationexex.component.html',
  styleUrls: ['./customvalidationexex.component.scss']
})
export class CustomvalidationexexComponent implements OnInit {

submittedVal: string;
  myForm: FormGroup;
  sku: AbstractControl;


  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      'sku':  ['', Validators.compose([
        Validators.required, skuValidator])]
    });

    this.sku = this.myForm.controls['sku'];
  }

  onSubmit(value: string): void {
    this.submittedVal = value;
    console.log('you submitted value: ', value);
  }

  ngOnInit() {
    this.submittedVal='def val';
}

}
