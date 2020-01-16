import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'form2';
  form: FormGroup;

  constructor() {
    this.form = new FormGroup({
      registeredName: new FormControl(null, {
        updateOn: 'change',
        validators: [Validators.required]
      }),
      tradingName: new FormControl(null, {
        updateOn: 'change',
        validators: [Validators.required]
      }),
      taxPayerRegistration: new FormControl(null, {
        updateOn: 'change',
        validators: [Validators.minLength(14), Validators.maxLength(18)]
      }),
      stateSubscription: new FormControl(null, {
        updateOn: 'change',
        validators: [Validators.minLength(9), Validators.maxLength(10)]
      })
    });
  }

  addConsole() {
    if (this.form.invalid) {
      return;
    }
    console.log(this.form.value);
  }

}
