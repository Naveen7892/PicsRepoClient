import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pic-add',
  templateUrl: './pic-add.component.html',
  styleUrls: ['./pic-add.component.scss']
})
export class PicAddComponent implements OnInit {

  title = 'MatDialogComponentClient';
  picModel = new PicsModel();
  picsList = new Array<PicsModel>();
  loader:boolean = false;

  constructor(public dialogRef: MatDialogRef<MatDialogComponent>,private _snackBar: MatSnackBar, private matDialogService: MatDialogService) {}


  ngOnInit() { }

  uploadImage() {
    this.loader=true;
    console.log("uploadImage method calling");
    if (this.picModel.Name != null && this.picModel.File != null) {      
      this.matDialogService.uploadPics(this.picModel).subscribe(res => {
        console.log(res);
        this.dialogRef.close({
          cancelled: true
        });
        this.loader=false;
      }, err => {
        console.log(err);
        this.dialogRef.close({
          cancelled: false
        });
        this.loader=false;
      });
    }   
    else {
      this._snackBar.open("Choose Photo Mandatory!","", {
        duration: 3000,
      });
      this.loader=false;
    } 
    
  }

  closeDialog() {
    this.dialogRef.close({
      cancelled: false
    });
  }

  onFileSelect(event) {
    if (event.target.files.length > 0) {
      this.picModel.File = event.target.files[0];
    }
  }

}
