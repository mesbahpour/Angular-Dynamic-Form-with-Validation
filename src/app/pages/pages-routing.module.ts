import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../core/guard/auth.guard';
import { CompanyComponent } from './company/company.component';
import { ProductComponent } from './product/product.component';
import * as company from '../core/config/json/company.json';
import * as product from '../core/config/json/product.json';
import { CompanyDetailComponent } from './company-detail/company-detail.component';

const routes: Routes = [
  {
    path: 'company', component: CompanyComponent, data: company,  

    children: [
      {
        path: ':id', 
        component: CompanyDetailComponent, 
      }
    ],
  },
  { path: 'product', component: ProductComponent, data: product }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
