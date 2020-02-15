import { HomelazyComponent } from './../../components/homelazy/homelazy.component';
import { HeaderComponent } from './../../components/header/header.component';
import { FooterComponent } from './../../components/footer/footer.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: HomelazyComponent,
    children: [
      {
        path: 'header',
        component: HeaderComponent
      },
      {
        path: 'footer',
        component: FooterComponent
      }
    ]
  }
];

@NgModule({
  declarations: [FooterComponent, HeaderComponent, HomelazyComponent],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyLoadingRoutingModule { }
