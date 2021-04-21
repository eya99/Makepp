import { ThemeserviceService } from './../../_services/themeservice.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-apptheme',
  templateUrl: './apptheme.component.html',
  styleUrls: ['./apptheme.component.scss']
})
export class AppthemeComponent implements OnInit {
projectname = localStorage.getItem('projectname');
appbarcolordark = '#010101';
appbartextcolordark = '#f4f4f4';
bodytextcolordark = '#f4f4f4';
bodycolordark = '#303030';
buttoncolor = '#0081ea';
mode:number=0;

  constructor(private Themeservice: ThemeserviceService) { }
  onDarkMode(event: any) {
   
    if(this.mode==0){
      this.mode=1;
      this.appbarcolordark = '#010101';
      this.appbartextcolordark = '#f4f4f4';
      this.bodytextcolordark = '#f4f4f4';
      this.bodycolordark = '#303030';
      this.buttoncolor = '#0081ea';
      this.Themeservice.createTheme(this.projectname,1).subscribe((data) => {}
      );
    }else{
      this.mode=0;
      this.appbarcolordark = '#0081eb';
      this.appbartextcolordark = '#f4f4f4';
      this.bodytextcolordark = '#000000';
      this.bodycolordark = '#ffffff';
      this.buttoncolor = '#0081ea';
    }
    console.log("darkmode  "+ this.mode);
    
  }
  ngOnInit(): void {
  }

}
