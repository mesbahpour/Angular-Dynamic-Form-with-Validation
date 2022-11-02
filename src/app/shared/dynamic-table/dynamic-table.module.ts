import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DynamicTableRoutingModule } from './dynamic-table-routing.module';
import { DynamicTableComponent } from './dynamic-table.component';


@NgModule({
  declarations: [
    DynamicTableComponent
  ],
  imports: [
    CommonModule,
    DynamicTableRoutingModule
  ],
  exports: [
    DynamicTableComponent,
  ]
})
export class DynamicTableModule { }
