import { Component, OnInit} from '@angular/core';
import { PetsInterface } from '../types/pets.interface';
import { PetsService } from '../services/pets.service';
import { NotifierService } from '../services/notifier.service';

@Component({
  selector: 'app-show-pets',
  templateUrl: './show-pets.component.html',
  styleUrls: ['./show-pets.component.css'],
})

export class ShowPetsComponent implements OnInit {

  pets: PetsInterface[] = [];
  petsList = {};
  adopted: boolean = true;
  searchStr:string = '';
  petType: string = 'All';
  petGender: string = 'All';
  totalLength:number = this.pets.length;
  showNoDataMessage: boolean = false
  page: number = 1

  constructor(
    private petsService: PetsService,
    private notifierService: NotifierService
  ) {}
  
  ngOnInit(): void {
   this.renderPets();
  }

  renderPets():void{
    this.petsService.getPets()
    .subscribe((pets: PetsInterface[])=>{
      this.pets = pets;
      this.totalLength = pets.length;
    })
  }

  onFilter():void {
    this.petsService.type.subscribe(prop => {
      this.petType = prop;
    })
    this.petsService.gender.subscribe(prop => {
      this.petGender = prop;
    })
    this.petsService.sortPets(this.petType, this.petGender).subscribe((pets: PetsInterface[]) => {
      this.pets = pets;
      this.totalLength = pets.length;
    });
  }

  adoptAnimal(data: PetsInterface):void{
    if(!data.adopted) {
      const animal = {
        ...data,
        adopted: true,
      }
      this.petsService.adoptPets(animal).subscribe(() => {
        this.petsList = animal;
        this.renderPets()
        this.notifierService.showNotification();
      });
      this.petsService.setPets(animal);
    }
  }
}