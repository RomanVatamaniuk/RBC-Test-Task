import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import {map, Observable } from "rxjs";
import { PetsInterface } from "../types/pets.interface";
import {environment} from '../../environments/environment';

@Injectable({providedIn: 'root'})

export class PetsService {


  onePet:any;

  constructor(private http: HttpClient) { }
  getPets():Observable<PetsInterface[]>{
    return this.http.get<PetsInterface[]>('http://localhost:3000/pets')
  }

  getPetsById(id:number):Observable<PetsInterface> {
    return this.http.get<PetsInterface>(`http://localhost:3000/pets/${id}`)
      
  }

  searchPets(searchValue: string): Observable<PetsInterface[]>{
    return this.http.get<PetsInterface[]>(`http://localhost:3000/pets?q=${searchValue}`)
  }

  adoptPets(data: PetsInterface): Observable<PetsInterface[]>{
    return this.http.put<PetsInterface[]>(`http://localhost:3000/pets/${data.id}`, data)
  }

  setPets(data: PetsInterface) {
    this.onePet = data;
  }

  receivePet(){
    return this.onePet;
  }
}
