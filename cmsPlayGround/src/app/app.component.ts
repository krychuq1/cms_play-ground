import { Component } from '@angular/core';
import {ContentService} from "./services/content.service";
import {MatDialog} from "@angular/material";
import {ExamplePopUp} from "./modals/example-pop-up/example-pop-up";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  appName = 'cms app';
  contentUrl: string;
  content: object;

  constructor(private contentService: ContentService, public dialog: MatDialog){
    this.contentUrl = 'page/app/';
    localStorage.setItem('lan', 'en');
    this.getContent();
  }
  changeLanguage(lan: string){
    localStorage.setItem('lan', lan);
    this.getContent();
  }
  openTestModal():void{
    const dialogref = this.dialog.open(ExamplePopUp, {
      width: '400px'
    });
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
