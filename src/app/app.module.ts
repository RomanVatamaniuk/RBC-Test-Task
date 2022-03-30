import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ShowPetsComponent } from './show-pets/show-pets.component';
import {HttpClientModule} from "@angular/common/http";
import { PetsService } from './services/pets.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    ShowPetsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [PetsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
