import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'form-angular';
  form: FormGroup;

  constructor() {
    this.form = new FormGroup({
      name: new FormControl(null, {
        updateOn:'change',
        validators: [Validators.required, Validators.minLength(6)]
      }),
      password: new FormControl(null, {
        updateOn:'change',
        validators: [Validators.required, Validators.minLength(5)]
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
