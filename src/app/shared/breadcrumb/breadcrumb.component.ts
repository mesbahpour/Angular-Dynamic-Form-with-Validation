import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { ApiService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {
  
  productCount:number = 0;

  constructor( public router: Router, private location: Location ,private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.productCount.subscribe(count => {
      this.productCount = count;
    })
  }

  public goToHomepage(): void {
    this.router.navigate(['/']);
  }

  public goBack(): void {
    this.location.back()
  }


  
}
