import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IdComponent } from './id.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

const router = [
{
  path: '',
  component: IdComponent,
  children: []
}
];



@NgModule({
  declarations: [IdComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forChild(router)
  ],
  exports: [IdComponent]
})
export class IdModule { }
