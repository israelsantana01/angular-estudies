import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { SecondComponentComponent } from './second-component/second-component.component';
import { NgIfNgForComponent } from './ng-if-ng-for/ng-if-ng-for.component';

@NgModule({
  declarations: [
    AppComponent,
    DataBindingComponent,
    SecondComponentComponent,
    NgIfNgForComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


