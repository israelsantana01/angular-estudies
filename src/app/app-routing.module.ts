import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { SecondComponentComponent } from './second-component/second-component.component';


const routes: Routes = [
  { path: 'first-component', component: DataBindingComponent },
  { path: 'second-component', component: SecondComponentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
