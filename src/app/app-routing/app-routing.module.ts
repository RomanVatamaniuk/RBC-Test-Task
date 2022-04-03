import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from '../app.component';
import { PetPageComponent } from '../pet-page/pet-page.component';
import { ShowPetsComponent } from '../show-pets/show-pets.component';

const routes: Routes = [
  {path:'', component: ShowPetsComponent},
  {path: '', redirectTo: '/', pathMatch: 'full'},
  {path: '', component: ShowPetsComponent},
  {path: 'pet/:id', component: PetPageComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }

