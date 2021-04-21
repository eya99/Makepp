import { TokenStorageService } from './../../_services/token-storage.service';

import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { User } from 'src/app/entities/user';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  private loggeduser: User;
  username ='';
  dash='';

constructor( private tokenStorage: TokenStorageService,
  private router: Router,) { }

onIconDash() {
  this.dash='app-icon-dash';
}
onSplashDash(){
  this.dash='app-splash-dash';
}
onNewPage(){
  this.dash='app-newpage';
}
onAppTheme(){
  this.dash='app-apptheme';
}
ondata(){
  this.dash='app-database';
}
onprofile(){
  this.dash='app-profile-client';
}












  ngOnInit(): void {

    this.loggeduser=this.tokenStorage.getUser();
    this.username=this.loggeduser[Object.keys(this.loggeduser)[1]];

    this.dash='app-icon-dash'
  }

}
