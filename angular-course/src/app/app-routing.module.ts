import { NgIfNgForComponent } from './ng-if-ng-for/ng-if-ng-for.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { SecondComponentComponent } from './second-component/second-component.component';


const routes: Routes = [
  {
    path: 'lazy',
    loadChildren: './modules/lazy-loading/lazy-loading.module#LazyLoadingModule'
  },
  {
    path: 'first-component',
    component: DataBindingComponent
  },
  {
    path: 'second-component',
    component: SecondComponentComponent
  },
  {
    path: 'test',
    component: NgIfNgForComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
