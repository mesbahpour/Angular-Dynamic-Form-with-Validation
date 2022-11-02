import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { identity } from 'rxjs';
import { ApiService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit{
  formConfig: any;
  styleConfig: any;
  handleUpdateResponse: any;
  companies:any;
  cols = ['companyName','tel','type'];
  faColumns = ['نام شرکت', 'تلفن', 'دسته بندی'];
  isEmpty:boolean = false;
  hasDetailButton:boolean = true;
  allProducts:any;
  filtteredProduct:any;

 constructor (private route:ActivatedRoute, private router:Router, private apiService: ApiService) {
  this.formConfig = route.snapshot.data['data'][0];
  this.styleConfig = route.snapshot.data['style'];
 }

 
ngOnInit() {
  this.getCompany();
}

private getCompany() { 
  this.apiService.get('company').subscribe({
    next: res => {
     this.companies = res;
     this.companies.reverse();
    },
    error: error => {
    },
    complete: () => {
    }
  });
}


submit(e: any) { 
  if(e.valid) {
    this.apiService.post('company' ,e.value).subscribe(data => {
      this.getCompany();
    })   
  }  
 }
 

 filterProduct(id:number) {

  let arr:string[] = [];

  this.allProducts.forEach((element:any) => {
    if(element.companyId == id){
      arr.push(element)
    }
  });
  return arr;
 }


 getCompanyId(id:number) {

  this.apiService.get('company').subscribe({
    next: res => {
     this.allProducts = res;
    },
    error: error => {
    },
    complete: () => {
      const el:any = this.filterProduct(id);

      this.router.navigate(['company/',id], { state:{data: el }});

    }
  });

}



}
