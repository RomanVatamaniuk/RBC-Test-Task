import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { PetsService } from '../services/pets.service';
import { PetsInterface } from '../types/pets.interface';


@Component({
  selector: 'app-pet-page',
  templateUrl: './pet-page.component.html',
  styleUrls: ['./pet-page.component.css']
})

export class PetPageComponent implements OnInit {

  pet!: PetsInterface;

  constructor(
    private http: HttpClient,
    private activatedRoute:ActivatedRoute,
    private petsService: PetsService,
    private router: Router,
) {}

  ngOnInit():void {
    this.renderPet()
  }

  renderPet() {
    this.activatedRoute.params.subscribe((params: any) => {
      this.pet = params
      if (params.id) {
        this.petsService.getPetsById(params.id).subscribe((res: PetsInterface)=>{
          this.pet = res;
        });
      }
    })
  }

  adoptPets(data: PetsInterface){
    if(data.adopted) {
      this.unAdoptPets(data);
      this.renderPet();
    } else {
      const animal = {
        "id": data.id,
        "name": data.name,
        "type": data.type,
        "Breed": data.Breed,
        "age": data.age,
        "image": data.image,
        "gender": data.gender,
        "adopted": true,
        "neutered": data.neutered,
        "vaccinated": data.vaccinated
      }
      this.petsService.adoptPets(animal).subscribe((pets) => {
        this.pet = pets[data.id];
        this.renderPet();
      });
    }
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
      "adopted": false,
      "neutered": data.neutered,
      "vaccinated": data.vaccinated
    }
    this.petsService.adoptPets(animal).subscribe((pets) => {
      this.pet = pets[data.id];
      this.renderPet()
    });
  }

}

