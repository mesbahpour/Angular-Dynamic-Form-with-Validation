import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Company } from '../interface/company';
import { Product } from '../interface/product';

@Injectable({
  providedIn: 'root'
})
export class ApiService {


  baseURL: string = "http://localhost:3000/";

  private productCount$ = new BehaviorSubject<number>(0);
  public productCount = this.productCount$.asObservable();

  changeProductCount(count: number) {
    this.productCount$.next(count);
  }
 
  constructor(private http: HttpClient) {
  }
 
  public get(path: string) { 
  return this.http.get(this.baseURL+path); 
  }

  public post(path: string, body: Object = {}) { 
    const headers = { 'content-type': 'application/json'}  
    return this.http.post(this.baseURL+path, body, {'headers':headers}); 
    } 

  // addCompany(company:Company): Observable<any> {
  //   const headers = { 'content-type': 'application/json'}  
  //   const body= company;
  //   return this.http.post(this.baseURL + 'company' ,body,{'headers':headers})
  // }

  // addProduct(product:Product): Observable<any> {
  //   const headers = { 'content-type': 'application/json'}  
  //   const body= product;
  //   return this.http.post(this.baseURL + 'product' ,body,{'headers':headers})
  // }

}


// public post(url: string, data: any, options?: any) { 
//   return this.http.post(url, data, options); 
//   } 
//   public put(url: string, data: any, options?: any) { 
//   return this.http.put(url, data, options); 
//   } 
//   public delete(url: string, options?: any) { 
//   return this.http.delete(url, options); 
//   } 