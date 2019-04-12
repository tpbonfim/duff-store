import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'cerveja-detalhes/:id', loadChildren: './cerveja-detalhes/cerveja-detalhes.module#CervejaDetalhesPageModule' },
  { path: 'add-cerveja', loadChildren: './add-cerveja/add-cerveja.module#AddCervejaPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
