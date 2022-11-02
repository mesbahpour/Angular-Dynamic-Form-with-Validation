import { AfterContentInit, AfterViewInit, Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/core/guard/auth.service';
import * as signIn from '../../core/config/json/signIn.json';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit, OnDestroy, AfterContentInit {
  isLoggedIn$: any = false;
  subscription = new Subscription();
  formConfig: any = signIn;
  styleConfig: any = signIn;
  formValue: any;
  loader:boolean = false;

  constructor(private authService: AuthService, private router: Router) {
    this.formConfig = this.formConfig.data[0];
    this.styleConfig = this.styleConfig.style;
  }



  ngOnInit(): void {
    this.subscription =   this.authService.isLoggedIn$.subscribe(value => {
      this.isLoggedIn$ = value;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  login(e: any) {
    this.formValue = e;
    if (this.formValue.username != '' && this.formValue.password != '') {
      if (this.authService.login(this.formConfig.username.value, this.formConfig.password.value)) {
        this.router.navigate(['/dashboard/company']);
        this.isLoggedIn$ = true;
      } else {
      console.log(this.formValue.username, this.formValue.password);
      
       }
    }
    
  }

  ngAfterContentInit() {
    setTimeout(() => {
      this.loader = true;
    }, 500);
  }

}
