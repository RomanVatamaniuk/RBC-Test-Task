import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { PetsInterface } from '../types/pets.interface';
import { PetsService } from '../services/pets.service';

@Component({
  selector: 'app-show-pets',
  templateUrl: './show-pets.component.html',
  styleUrls: ['./show-pets.component.css'],
})

export class ShowPetsComponent implements OnInit {

  pets: PetsInterface[] = [];
  petsList = {};
  popup:boolean = false;
  adopted:boolean = true;

  @Output() showData: EventEmitter<any> = new EventEmitter()

  constructor(private http: HttpClient, private petsService: PetsService) { }

  ngOnInit(): void {
    this.petsService.getPets().subscribe((pets: PetsInterface[]) => {
      this.pets = pets;
    });
  }

  adoptAnimal(data: PetsInterface):void{
    if(!data.adopted) {
      const animal = {
        "id": data.id,
        "name": data.name,
        "type": data.type,
        "Breed": data.Breed,
        "age": data.age,
        "image": data.image,
        "gender": data.gender,
        "adopted": true
      }
      this.petsService.adoptPets(animal).subscribe((pets) => {
        console.log('Pets:', pets);
        this.petsList = animal
        console.log('PetsList:', this.petsList);
      });
      this.showData.emit(this.popup);
      this.petsService.setPets(animal)
    }
  }

}
