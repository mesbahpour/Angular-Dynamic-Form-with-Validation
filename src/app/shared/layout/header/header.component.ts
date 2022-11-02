import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/guard/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent{
  isLoggedIn$:any; 

  constructor(private authService: AuthService, private router: Router) {  
    this.authService.isLoggedIn$.subscribe(parameter => {
      if(localStorage.getItem('currentUser')){
        this.isLoggedIn$= true;
      }else {
        this.isLoggedIn$= false;
      }
    });
  }

  logout(): void {  
    this.authService.logout();
    this.isLoggedIn$= false;
    this.router.navigate(['/']);
  } 
}
