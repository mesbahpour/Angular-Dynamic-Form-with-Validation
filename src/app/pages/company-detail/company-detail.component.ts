import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-company-detail',
  templateUrl: './company-detail.component.html',
  styleUrls: ['./company-detail.component.scss']
})
export class CompanyDetailComponent implements OnInit {

 productList:any;

  constructor(private activatedRoute: ActivatedRoute){
  this.activatedRoute.paramMap
  .pipe(map(() => window.history.state.data))
  .subscribe(res=>{
      this.productList = res; 
  })
  
  }
  ngOnInit(): void {}

}

