import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { PetsInterface } from "../types/pets.interface";

@Injectable({providedIn: 'root'})

export class PetsService {

  pets:PetsInterface[] = [];
  onePet:any;
  BASE_URL: string = 'http://localhost:3000/pets';

  petPropType$ = new BehaviorSubject<string>('All');
  petPropGender$ = new BehaviorSubject<string>('All');

  gender = this.petPropGender$.asObservable();
  type = this.petPropType$.asObservable();

  constructor(private http: HttpClient) { }

  setGender(newprop:string){
    this.petPropGender$.next(newprop)
  }
  setType(newprop:string){
    this.petPropType$.next(newprop)
  }

  getPets():Observable<PetsInterface[]>{
    return this.http.get<PetsInterface[]>(this.BASE_URL)
  }

  getPetsById(id:number):Observable<PetsInterface> {
    return this.http.get<PetsInterface>(`${this.BASE_URL}/${id}`)
  }

  searchPets(searchValue: string): Observable<PetsInterface[]>{
    return this.http.get<PetsInterface[]>(`${this.BASE_URL}?q=${searchValue}`)
  }

  adoptPets(data: PetsInterface): Observable<PetsInterface[]>{
    return this.http.put<PetsInterface[]>(`${this.BASE_URL}/${data.id}`, data)
  }

  setPets(data: PetsInterface):void {
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
  
  sortPets(type:string, gender:string):Observable<PetsInterface[]> {
    if(type === 'All' && gender !== 'All'){
      return this.http.get<PetsInterface[]>(`${this.BASE_URL}?gender=json-server&gender=${gender}`);
    } else if (gender === 'All' && type !== 'All'){
      return this.http.get<PetsInterface[]>(`${this.BASE_URL}?type=json-server&type=${type}`);
    } else if(type === 'All' && gender === 'All'){
      return this.http.get<PetsInterface[]>(this.BASE_URL)
    } else {
      return this.http.get<PetsInterface[]>(`${this.BASE_URL}?type=${type}&gender=${gender}`);
    }
  }
}
