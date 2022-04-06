import { Component, EventEmitter, Output } from '@angular/core';
import { petsProperties } from '../types/petsProperties.interface';


@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {

  props: petsProperties = {
    type:'All',
    gender:'All',
  }

  @Output() properties: EventEmitter<petsProperties> = new EventEmitter<petsProperties>()

  sendProperties(e:petsProperties){
    this.properties.emit(this.props);
  }

  sortAnimalsByType(e: any){
    this.props.type = e.defaultValue;
    this.sendProperties(e);
  };

  sortAnimalsByGender(event:any){
    this.props.gender = event.defaultValue;
    this.sendProperties(event);
  };

}

