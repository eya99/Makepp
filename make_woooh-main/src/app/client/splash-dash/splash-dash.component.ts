import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import html2canvas from 'html2canvas';
import { Splash } from 'src/app/entities/splash';
import { AddSplashServiceService } from 'src/app/_services/add-splash-service.service';

@Component({
  selector: 'app-splash-dash',
  templateUrl: './splash-dash.component.html',
  styleUrls: ['./splash-dash.component.scss']
})
export class SplashDashComponent implements OnInit {
  color = '#0000ff';
  capturedImage;
  splashDataUrl;
   icon_color = localStorage.getItem('icon_color');
   text_color = localStorage.getItem('text_color');
   font_text_icon = localStorage.getItem('font_text_icon');
   font_size_icon = localStorage.getItem('font_size_icon');
   icon_text = localStorage.getItem('icon_text');
   round_icon = '10';
   projectname = localStorage.getItem('projectname');
   slogan = 'Welcome to '+ this.projectname;
   font_text_slogan='';
   font_size_slogan='';
   icon_size;
   slogan_color=''
  constructor(private addSplashService: AddSplashServiceService , public dialog: MatDialog) { }
  onKey(event: any) {
    // without type info
    this.color = event.target.value;
    console.log("this is the color choosed "+ console.log(event));
    
  }
  selectChangeHandler(event: any) {
    //update the ui
    this.font_text_slogan = event.target.value;
    
  
  }
  onKey1(event: any) {
    // without type info
    this.slogan_color = event.target.value;
    console.log("this is the color choosed "+ console.log(event));
    
  }
  selectChangeHandler2(event: any) {
    //update the ui
    this.font_size_slogan = event.target.value;
    localStorage.setItem('font_size_icon',this.font_size_icon);
  }
  onKeytext(event: any) {
    // without type info
    this.slogan = event.target.value;
    
  }

  eventIconSize( event: any ) {

      this.icon_size=event.target.value+'px';
      this.font_size_icon=event.target.value - 40 +"px"
      console.log("this is the size"+this.font_size_icon )    
  }
  eventRoundSize( event: any ) {
    this.round_icon=''
    this.round_icon +=event.target.value+'px';
    
    console.log("this is the round"+this.round_icon )    
}
openDialog(): void {
  const dialogRef = this.dialog.open(Popup, {
    width: '250px',
    
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');
    
  });
}

downloadImage(){
  const icon: Splash = new Splash();
  
  html2canvas(document.querySelector("#splashDiv")).then(canvas => {

    debugger;

    ///document.body.appendChild(canvas);
   this.capturedImage = canvas.toDataURL();
   console.log("canvas.toDataURL() -->" + this.capturedImage);
   // this will contain something like (note the ellipses for brevity), console.log cuts it off 
   // "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAa0AAAB3CAYAAACwhB/KAAAXr0lEQVR4Xu2dCdiNZf7HP/ZQkpQtaUxDjYYoTSYlURMhGlmKa..."

   
   canvas.toBlob(function (blob) {
     
     //  just pass blob to something expecting a blob
     // somfunc(blob);

     // Same as canvas.toDataURL(), just longer way to do it.
     var reader = new FileReader();
     debugger;
     reader.readAsDataURL(blob);
     reader.onloadend = function () {
       let base64data = reader.result;
       console.log("Base64--> " + base64data);
      
     }

   });
   icon.projectname = localStorage.getItem('projectname') ;
   this.splashDataUrl = this.capturedImage;
 console.log('this is icon object : '+ this.splashDataUrl)
 this.addSplashService.createSplash(this.projectname,this.splashDataUrl).subscribe((data) => {});
 });
 
 

    const dialogRef = this.dialog.open(Popup, {
      width: '300px',
      
    });
const timeout = 5000;
      dialogRef.afterOpened().subscribe(_ => {
        setTimeout(() => {
           dialogRef.close();
           
        }, timeout)
      })
}
  
  ngOnInit(): void {
  }

}
@Component({
  selector: 'popup',
  templateUrl: 'popup.html',
})
export class Popup {

  constructor(
    public dialogRef: MatDialogRef<Popup>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
