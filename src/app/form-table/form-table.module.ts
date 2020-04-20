import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormTableComponent } from './form-table.component';
import { PrintTableComponent } from '../print-table/print-table.component';



@NgModule({
  declarations: [FormTableComponent, PrintTableComponent],
  imports: [
    CommonModule
  ]
})
export class FormTableModule { }
