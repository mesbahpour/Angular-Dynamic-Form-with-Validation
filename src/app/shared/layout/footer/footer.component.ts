import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/guard/auth.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent  {

  isLoggedIn :boolean =false;

  constructor(private authService: AuthService) {  
    this.authService.isLoggedIn$.subscribe(parameter => {
      if(localStorage.getItem('currentUser')){
        this.isLoggedIn= true;
      }else {
        this.isLoggedIn= false;
      }
    });
  }
  }