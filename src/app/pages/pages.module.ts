import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { CompanyComponent } from './company/company.component';
import { ProductComponent } from './product/product.component';
import { FormsModule } from '@angular/forms';
import { FormModule } from '../shared/form/form.module';
import { HttpClientModule } from '@angular/common/http';
import { DynamicTableComponent } from '../shared/dynamic-table/dynamic-table.component';
import { DynamicTableModule } from '../shared/dynamic-table/dynamic-table.module';
import { CompanyDetailComponent } from './company-detail/company-detail.component';


@NgModule({
  declarations: [
    CompanyComponent,
    ProductComponent,
    CompanyDetailComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    FormsModule,
    FormModule,
    HttpClientModule,
    DynamicTableModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PagesModule { }
