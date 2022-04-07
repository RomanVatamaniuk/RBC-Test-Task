import { Component} from '@angular/core';
import { PetsService } from '../services/pets.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {

  constructor(private petsService:PetsService){}

  sortAnimalsByType(e: any){
    this.petsService.setType(e.defaultValue);
  };

  sortAnimalsByGender(event:any){
    this.petsService.setGender(event.defaultValue);
  };
}

