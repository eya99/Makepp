import { Placeholder } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit,Inject } from '@angular/core';
import { Validators, Validator, FormBuilder,FormArray, FormGroup, FormControl } from '@angular/forms'
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
export interface DialogData {
  control: string;
  name: string;
  placeholder:string;

}
@Component({
  selector: 'app-DialogValidation',
  templateUrl: './DialogValidation.component.html',
  styleUrls: ['./DialogValidation.component.scss']
})

export class DialogValidationComponent implements OnInit {
  form: FormGroup;
  controls: any = [
    //{ name: 'password', control: new FormControl('', Validators.minLength(3)) }
  ];
  values = {
    name: '',
    password: '',
  }
  name;
  placeholder;
  constructor( private fb: FormBuilder,
    public dialogRef: MatDialogRef<DialogValidationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
    this.form = fb.group(this.controls);
    // this.name = 'Angular2 (Release Candidate!)'
    this.controls.map((item) => {
      console.log('map item', item);
     });
  }

  addDomain(name,placeholder, validator, length) {
    this.values[name] = '';
    this.values[placeholder] = '';
    var validator;
    if (length) {
      validator = Validators[validator](length);
    } else {
      validator = Validators[validator];
    }

    let newCtl = new FormControl('', validator);
    this.controls.push({ name: name, control: newCtl ,placeholder:placeholder});
    this.form.addControl(name, newCtl);
console.log(this.controls)
    this.dialogRef.close({ name: name, control: newCtl ,placeholder:placeholder});

  }

  ngOnInit() {
  }

}
