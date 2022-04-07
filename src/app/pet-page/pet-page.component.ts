import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
    private activatedRoute:ActivatedRoute,
    private petsService: PetsService,
) {}

  ngOnInit():void {
    this.renderPet()
  }

  renderPet():void {
    this.activatedRoute.params.subscribe((params:any) => {
      this.pet = params
      if (params.id) {
        this.petsService.getPetsById(params.id).subscribe((res: PetsInterface)=>{
          this.pet = res;
        });
      }
    })
  }

  adoptPets(data: PetsInterface):void{
    if(data.adopted) {
      this.unAdoptPets(data);
      this.renderPet();
    } else {
      const animal = {
        ...data,
        adopted: true,
      }
      this.petsService.adoptPets(animal).subscribe((pets) => {
        this.pet = pets[data.id];
        this.renderPet();
      });
    }
  }

  unAdoptPets(data: PetsInterface):void {
    const animal = {
      ...data,
      adopted: false,
    }
    this.petsService.adoptPets(animal).subscribe((pets) => {
      this.pet = pets[data.id];
      this.renderPet()
    });
  }
}