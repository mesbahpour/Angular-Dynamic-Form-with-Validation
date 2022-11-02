import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from 'src/app/core/interface/product';
import { ApiService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {

  formConfig: any;
  styleConfig: any;
  data:any;
  cols = ['productName','date', 'status'];
  faColumns = ['نام محصول', 'تاریخ تولید','وضعیت'];
  isEmpty:boolean = false;
  productCount:number = 0;


  constructor (private route:ActivatedRoute, private router:Router, private apiService: ApiService) {
  this.formConfig = route.snapshot.data['data'][0];
  this.styleConfig = route.snapshot.data['style'];
 }


ngOnInit() {
  this.loadData();
}


private loadData() { 
  this.apiService.get('product').subscribe({
    next: c => {
     this.data = c;
     this.productCount= this.data.length;
     this.apiService.changeProductCount(this.productCount);
     if(this.data.length>0){
      this.isEmpty =true;

      this.data.forEach( (element:any) => {

        if(element.status === true){
          element.status = 'فعال';
        }else{
          element.status = 'غیر فعال';
        }

      });
     }
      
    },
    error: error => {
    },
    complete: () => {
    }
  });
}

submit(e: any) {
  if(e.valid) {
    this.apiService.post('product', e.value).subscribe(data => {
      this.loadData();
      const count:any = this.productCount++;
      this.apiService.changeProductCount(this.productCount);
    })   
  }  
 }


}
