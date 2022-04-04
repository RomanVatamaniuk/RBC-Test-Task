import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { petsProperties } from '../types/petsProperties.interface';


@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  props: petsProperties = {
    type:'All',
    gender:'All',
  }

  @Output() properties: EventEmitter<petsProperties> = new EventEmitter<petsProperties>()

  constructor() { }

  ngOnInit(): void {
  }

  sendProperties(e:any){
    this.properties.emit(this.props)
  }
  sortAnimalsByType(e:any){
    this.props.type = e.defaultValue;
    console.log('TYPE:', this.props);
    this.sendProperties(e);
  };

  sortAnimalsByGender(event:any){
    this.props.gender = event.defaultValue;
    console.log('GENDER:', this.props);
    this.sendProperties(event);
  };

}

