import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import {FormsModule} from "@angular/forms";
import {SearchService} from "./search.service";

@NgModule({
  declarations: [
    AppComponent,
    SearchbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
