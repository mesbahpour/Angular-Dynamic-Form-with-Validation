import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn$: BehaviorSubject<boolean> = new BehaviorSubject(false);


  login(username: string, password: string):boolean  {  
    if (username == "admin" && password == "admin") {  
      localStorage.setItem('currentUser', "loggedin");  
      this.isLoggedIn$.next(true);
      return true;  
    } 
    else{
      this.isLoggedIn$.next(false); 
    return false;
    }
  }  

  
  logout() {  
    this.isLoggedIn$.next(false);
    localStorage.removeItem('currentUser');  
  }  


  public get loggedIn(): boolean {  
    this.isLoggedIn$.next(true);
    return (localStorage.getItem('currentUser') !== null);  
  } 
}


