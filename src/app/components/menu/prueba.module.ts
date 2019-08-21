import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PruebaComponent } from './prueba.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalModule } from '../modal/modal.module';
import { HttpClientModule } from '@angular/common/http';


const routes = [
  {
    path: '',
    component: PruebaComponent,
    children: []
  }
  ];

@NgModule({
  declarations: [PruebaComponent],
  imports: [
    CommonModule,
    NgbModule,
    ModalModule,
    HttpClientModule,
    RouterModule.forChild(routes)
  ],
  exports: [PruebaComponent],

})
export class PruebaModule { }
