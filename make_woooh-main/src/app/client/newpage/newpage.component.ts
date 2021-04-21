import { Component, OnInit , Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

import {
  CdkDragDrop,
  copyArrayItem,
  moveItemInArray
} from '@angular/cdk/drag-drop';
import { Validators, Validator, FormBuilder, FormGroup, FormControl } from '@angular/forms'
import { NewpageService } from 'src/app/_services/newpage.service';
import { DialogValidationComponent } from '../DialogValidation/DialogValidation.component';
import { DialogCheckboxComponent } from '../DialogCheckbox/DialogCheckbox.component';
export interface DialogData {
  validator: string;
  name: string;
  length:String;
}
@Component({
  selector: 'app-newpage',
  templateUrl: './newpage.component.html',
  styleUrls: ['./newpage.component.scss']
})

export class NewpageComponent implements OnInit {
  divs: number[] = [];
  element;
controlsTextbox: String[] = [];
controlsTextbox1: number[] = [];

controlsTextarea: String[] = [];
controlscheckbox: String[] = [];
  constructor(public dialog: MatDialog) {



   }


  createDiv(): void {
    let index: number = 1;


    this.divs.push(this.divs.length);

    console.log("div created")
    this.element="button";
    index++;


  }


  //Textbox
  textBoxList:any = [];






//TextArea



  createTextField(): void {
    let index: number = 1;

    this.openDialogTextBox();

    this.divs.push(this.divs.length);
    console.log("div created")
    this.element="input";
    index++;

  }
  clicktest(): void {

    console.log("clicked 1")
  }
  //dialog textbox
  openDialogTextBox(): void {
    const dialogRef = this.dialog.open(DialogValidationComponent, {
      width: '250px',
      data: { }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);

    console.log(result)

      this.controlsTextbox.push(result);
      console.log(this.controlsTextbox)
    });
  }
  openDialogCheckBox(): void {
    const dialogRef = this.dialog.open(DialogCheckboxComponent, {
      width: '250px',
      data: { }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      console.log(result)
this.controlscheckbox.push(result);
    });
  }
  //remove textbox
  removetextBoxList(index){
    this.controlsTextbox.splice(index, 1);
}
  //dialog textarea
  openDialogTextarea(): void {
    const dialogRef = this.dialog.open(DialogValidationComponent, {
      width: '250px',
      data: { }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);

      this.controlsTextarea.push(result);
      console.log(result)
    });
  }
  //remove textarea
  removeTextArea(index){
    this.controlsTextarea.splice(index, 1);
}


  openDialog(): void {
    const dialogRef = this.dialog.open(Popup, {
      width: '250px',

    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });
  }
  ngOnInit(): void {
    const dialogRef = this.dialog.open(Popup, {
      width: '300px',

    });

      dialogRef.afterOpened().subscribe(_ => {


      })
  }

}
@Component({
  selector: 'popup',
  templateUrl: 'popup.html',
})
export class Popup {
  projectname = localStorage.getItem('projectname');
  pagename;
  constructor(
    public dialogRef: MatDialogRef<Popup>,
    @Inject(MAT_DIALOG_DATA) public data: any , private NewPageservice: NewpageService) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
  onPageName(event: any) {
    // without type info
    this.pagename = event.target.value;
    localStorage.setItem('pagename',this.pagename);
  }
  onClick(): void {
    this.NewPageservice.createNewPage(this.projectname,this.pagename).subscribe((data) => {}
      );
     console.log("newpage " + this.pagename)
    this.dialogRef.close();
  }

}


