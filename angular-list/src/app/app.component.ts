import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'list-angular';
  names: string[] = [];
  value: string = '';

  addName() {
    if (this.value.length > 0) {
      this.value = this.value[0].toUpperCase() + this.value.substring(1).toLowerCase();
      this.names.push(this.value);
      this.value = '';
    }
  }

  deleteItem(name: string) {
    this.names = this.names.filter(item => item !== name);

  }
}
