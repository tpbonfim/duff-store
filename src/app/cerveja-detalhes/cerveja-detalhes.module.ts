import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CervejaDetalhesPage } from './cerveja-detalhes.page';

const routes: Routes = [
  {
    path: '',
    component: CervejaDetalhesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CervejaDetalhesPage]
})
export class CervejaDetalhesPageModule {}
