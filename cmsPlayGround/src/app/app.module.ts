import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {ContentService} from "./services/content.service";
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatButtonModule, MatDialogModule} from "@angular/material";
import {ExamplePopUp} from "./modals/example-pop-up/example-pop-up";


@NgModule({
  declarations: [
    AppComponent,
    ExamplePopUp
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    MatDialogModule
  ],
  entryComponents: [ExamplePopUp],
  providers: [ContentService],
  bootstrap: [AppComponent]
})

export class AppModule { }
