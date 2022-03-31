import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {PetsService} from '../services/pets.service';
import { PetsInterface } from '../types/pets.interface';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})

export class PopupComponent implements OnInit {
  onePet: any = {};
  constructor(private petsService: PetsService) { }

  ngOnInit() {
    this.onePet = this.petsService.receivePet()
  }

  unAdoptPets(data: PetsInterface) {
    const animal = {
      "id": data.id,
      "name": data.name,
      "type": data.type,
      "Breed": data.Breed,
      "age": data.age,
      "image": data.image,
      "gender": data.gender,
      "adopted": false
    }
    this.petsService.adoptPets(animal).subscribe((pets) => {
      console.log('Pets:', pets);
    });
    console.log('UnAdopt Pet', data)
  }




}
