import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-ngmodelex',
  templateUrl: './ngmodelex.component.html',
  styleUrls: ['./ngmodelex.component.scss']
})
export class NgmodelexComponent{
  myForm: FormGroup;
  productName: string;

  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      'productName':  ['', Validators.required]
    });
  }

  onSubmit(value: string): void {
    console.log('you submitted value: ', value);
}

}
