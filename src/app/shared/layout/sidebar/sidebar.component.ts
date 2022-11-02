import { Component, HostBinding, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  isMenuOpen:boolean = true;

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  toggle() {
    this.isMenuOpen = !this.isMenuOpen;
  }
  

}

