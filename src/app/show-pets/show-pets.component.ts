import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { PetsInterface } from '../types/pets.interface';
import { PetsService } from '../services/pets.service';
import {FilterComponent} from '../filter/filter.component';
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
  popup: boolean = false;
  adopted: boolean = true;
  searchText: string = '';
  petType: string = 'All';
  petGender: string = 'All';

  @Output() showData: EventEmitter<any> = new EventEmitter();

  constructor(private http: HttpClient,
    private petsService: PetsService,
    private notifierService: NotifierService
  ) { }

  totalLength:any;
  page:number = 1;

  ngOnInit(): void {
   this.renderPets();
  }

  renderPets(){
    this.petsService.sortPets(this.petType, this.petGender).subscribe((pets: PetsInterface[]) => {
      this.pets = pets;
      this.totalLength = pets.length;
    });
  }

  onFilter(properties: petsProperties) {
    this.petType = properties.type
    this.petGender = properties.gender
    this.renderPets()
  }

  onSearchTextEntered(searchValue:string) {
     this.searchText = searchValue;
     this.petsService.searchPets(this.searchText).subscribe((pets: PetsInterface[]) => {
       this.pets = pets;
       this.totalLength = pets.length;
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
        this.petsList = animal;
        this.renderPets()
        this.notifierService.showNotification();
      });
      this.showData.emit(this.popup);
      this.petsService.setPets(animal);
    }
  }


}
