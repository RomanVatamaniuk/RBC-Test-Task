import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ShowPetsComponent } from './show-pets/show-pets.component';
import {HttpClientModule} from "@angular/common/http";
import { PetsService } from './services/pets.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { PopupComponent } from './popup/popup.component';
import { SearchComponent } from './search/search.component';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    ShowPetsComponent,
    PopupComponent,
    SearchComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    NgxPaginationModule
  ],
  providers: [PetsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
