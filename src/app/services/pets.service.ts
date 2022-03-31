import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { PetsInterface } from "../types/pets.interface";

@Injectable()

export class PetsService {

  onePet:any;


  constructor(private http: HttpClient) { }
  getPets(): Observable<PetsInterface[]>{
    return this.http.get<PetsInterface[]>('http://localhost:3000/pets')
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
