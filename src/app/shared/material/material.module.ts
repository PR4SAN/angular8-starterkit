import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule, MatButtonModule, MatFormFieldModule, MatCheckboxModule } from '@angular/material';
@NgModule({
  imports: [
    CommonModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatCheckboxModule
  ],
  exports: [
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatCheckboxModule
  ]
})
export class AppMaterialModule { }
