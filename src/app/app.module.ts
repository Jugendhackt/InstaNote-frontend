import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import {FormsModule} from "@angular/forms";
import {SearchService} from "./search.service";
import { BlockControllerComponent } from './block-controller/block-controller.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchbarComponent,
    BlockControllerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
