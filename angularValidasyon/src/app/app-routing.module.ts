import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GirisComponent } from './giris/giris.component';
import { Giris2Component } from './giris2/giris2.component';

const routes: Routes = [
  {path: 'giris1', component: GirisComponent},
  {path: 'giris2', component: Giris2Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
