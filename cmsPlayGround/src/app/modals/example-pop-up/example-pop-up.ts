import {Component, Inject} from "@angular/core";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {ContentService} from "../../services/content.service";

@Component({
  selector: 'example-pop-up',
  templateUrl: './example-pop-up.html',
  styleUrls: ['./example-pop-up.scss']

})

export class ExamplePopUp  {
  content: object;
  contentUrl: string;

  constructor(private contentService : ContentService, public dialogRef: MatDialogRef<ExamplePopUp>,
              @Inject(MAT_DIALOG_DATA) public data: any){
    this.contentUrl = 'modal/example/';
    this.getContent();
  }
  getContent() {
    this.contentService.getContent(this.contentUrl).then((content) =>{
      this.content = content;
      console.log(this.content);
    }, err => {
      console.error(err);
    });
  }

}
