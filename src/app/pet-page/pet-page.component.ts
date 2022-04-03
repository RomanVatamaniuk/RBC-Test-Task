import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
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
  adoptBtn:string = '';

  constructor(
    private http: HttpClient,
    private activatedRoute:ActivatedRoute,
    private petsService: PetsService,
    private router: Router,
) {}

  ngOnInit():void {
    this.activatedRoute.params.subscribe((params: any) => {
      this.pet = params
      if (params.id) {
        this.petsService.getPetsById(params.id).subscribe((res: PetsInterface)=>{
          this.pet = res;
        });
        console.log('Pet:' ,this.pet);
      }
    })
  }
}

