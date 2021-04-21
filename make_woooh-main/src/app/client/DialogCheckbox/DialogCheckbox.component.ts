import { Component,Inject } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-DialogCheckbox',
  templateUrl: './DialogCheckbox.component.html',
  styleUrls: ['./DialogCheckbox.component.scss']
})
export class DialogCheckboxComponent {

  form: FormGroup
  constructor(private fb: FormBuilder,
    public dialogRef: MatDialogRef<DialogCheckboxComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Element) {

    // this.name = 'Angular2 (Release Candidate!)'
  }

  insertedID: string;
  insertedName: string;

  insertedtitre: string;
  fields = this.fb.group({
    elementArray: this.fb.array([this.createElementData('1', 'car',"ok")])
  });



  createNew() {
    const newRow = this.createElementData(this.insertedID, this.insertedName,this.insertedtitre);
    this.elementArray.push(newRow);


  }

  get elementArray(): FormArray {
    return this.fields.get("elementArray") as FormArray;
  }

  createElementData(passedID, passedName,passedTitre): FormGroup {
    if (passedID == 0 || !passedID) {
      passedID = this.elementArray.length + 1;
    }
    return this.fb.group({
      id: [passedID],
      name: [passedName],

      titre: [passedTitre],
    });
  }

  showData() {
    if (this.fields.value.elementArray.length > 0) {
      console.log(this.fields.value.elementArray);

    }
    this.dialogRef.close(this.fields.value.elementArray);

  }

}

export class Element {
  id: string;
  name: string;
  titre: string;
}
