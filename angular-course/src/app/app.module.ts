import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { SecondComponentComponent } from './second-component/second-component.component';
import { NgIfNgForComponent } from './ng-if-ng-for/ng-if-ng-for.component';
import { CrudComponent } from './components/crud/crud.component';
import { HttpClientModule } from '@angular/common/http';
import { LazyLoadingModule } from './modules/lazy-loading/lazy-loading.module';

@NgModule({
  declarations: [
    AppComponent,
    DataBindingComponent,
    SecondComponentComponent,
    NgIfNgForComponent,
    CrudComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LazyLoadingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


