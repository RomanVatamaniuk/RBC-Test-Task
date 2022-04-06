import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PetsInterface } from '../types/pets.interface';
import { PetsService } from '../services/pets.service';
import { petsProperties } from '../types/petsProperties.interface';
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
  searchText: string = '';
  petType: string = 'All';
  petGender: string = 'All';
  totalLength:number = this.pets.length;
  page:number = 1;
  hidePagination:boolean = true;

  @Output() showData: EventEmitter<any> = new EventEmitter();

  constructor(
    private petsService: PetsService,
    private notifierService: NotifierService
  ) {}

  ngOnInit(): void {
   this.renderPets();
  }

  renderPets():void{
    this.petsService.sortPets(this.petType, this.petGender).subscribe((pets: PetsInterface[]) => {
      this.pets = pets;
      this.totalLength = pets.length;
    });
  }

  onFilter(properties: petsProperties):void {
    this.petType = properties.type
    this.petGender = properties.gender
    this.renderPets()
  }

  onSearchTextEntered(searchValue:string):void {
     this.searchText = searchValue;
     this.petsService.searchPets(this.searchText).subscribe((pets: PetsInterface[]) => {
      if(pets.length <= 10){
        this.pets = pets;
        this.hidePagination = false;
        console.log(pets.length);
      } else {
        this.pets = pets;
        this.hidePagination = true;
      }
      });
  }

  checkSearch(pet:PetsInterface, searchText:string){
    return pet.name.toLowerCase().includes(searchText)
      || searchText === '' || pet.Breed.toLowerCase().includes(searchText)
      || searchText === '' || pet.Breed.toUpperCase().includes(searchText)
      || searchText === '' || pet.name.toUpperCase().includes(searchText)
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
