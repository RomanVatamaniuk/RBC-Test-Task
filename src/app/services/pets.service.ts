import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import {map, Observable } from "rxjs";
import { PetsInterface } from "../types/pets.interface";
import {environment} from '../../environments/environment';

@Injectable({providedIn: 'root'})

export class PetsService {

  pets:PetsInterface[] = [];
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

  setPet(data:PetsInterface[]) {
    return this.pets = data;
  }
  getPet(){
    return this.pets;
  }
  sortPets(type:string, gender:string) {
    if(type === 'All' && gender !== 'All'){
      return this.http.get<PetsInterface[]>(`http://localhost:3000/pets?gender=json-server&gender=${gender}`);
    } else if (gender === 'All' && type !== 'All'){
      return this.http.get<PetsInterface[]>(`http://localhost:3000/pets?type=json-server&type=${type}`);
    } else if(type === 'All' && gender === 'All'){
      return this.http.get<PetsInterface[]>('http://localhost:3000/pets')
    } else {
      return this.http.get<PetsInterface[]>(`http://localhost:3000/pets?type=json-server&gender=${gender}&type=${type}`);
    }
  }

}
