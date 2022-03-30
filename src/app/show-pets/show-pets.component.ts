import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { PetsInterface } from '../types/pets.interface';
import { PetsService } from '../services/pets.service';


@Component({
  selector: 'app-show-pets',
  templateUrl: './show-pets.component.html',
  styleUrls: ['./show-pets.component.css']
})
export class ShowPetsComponent implements OnInit {

  pets: PetsInterface[] = [];

  constructor(private http: HttpClient, private petsService: PetsService) { }

  ngOnInit(): void {
    this.petsService.getPets().subscribe((pets: PetsInterface[]) => {
      this.pets = pets;
      console.log('Pets', this.pets)
    });
  }

}
