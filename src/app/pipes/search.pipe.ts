import {Pipe, PipeTransform} from '@angular/core';
import { PetsInterface } from '../types/pets.interface';

@Pipe({
    name: 'searchAnimals'
})

export class SearchPipe implements PipeTransform{
    
    transform(pets: PetsInterface[], search = ''): PetsInterface[] {
        if(!search.trim()) {
            return pets;
        }
        return pets.filter(pet => {
            return pet.name.toLowerCase().includes(search.toLowerCase()) ||
                  pet.Breed.toLowerCase().includes(search.toLowerCase()) 
        })
    }
    
}