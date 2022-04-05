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
import { AppRoutingModule } from './app-routing/app-routing.module';
import { PetPageComponent } from './pet-page/pet-page.component';
import { FilterComponent } from './filter/filter.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { SnackBarComponent } from './snack-bar/snack-bar.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowPetsComponent,
    PopupComponent,
    SearchComponent,
    PetPageComponent,
    FilterComponent,
    SnackBarComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    NgxPaginationModule,
    MatSnackBarModule
  ],
  providers: [PetsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
