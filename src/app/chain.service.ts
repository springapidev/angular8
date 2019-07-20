import { Injectable } from '@angular/core';
import { Country } from './topnav/country';
import { State } from './topnav/state';
import { City } from './listchaining/city';

@Injectable({
  providedIn: 'root'
})
export class ChainService {

  constructor() { }
  getCountries() {
    return [
     new Country(1, 'USA' ),
     new Country(2, 'Bangladesh' ),
     new Country(3, 'Australia' )
    ];
  }
  
  getStates() {
   return [
     new State(1, 1, 'Arizona' ),
     new State(2, 1, 'Alaska' ),
     new State(3, 1, 'Florida'),
     new State(4, 1, 'Hawaii'),
     new State(5, 2, 'Dhaka' ),
     new State(6, 2, 'Sylhet'),
     new State(7, 2, 'Gazipur' ),
     new State(8, 3, 'Queensland' ),
     new State(9, 3, 'South Australia' ),
     new State(10, 3, 'Tasmania')
    ];
  }
  getCities(){
    return [
      new City(1, 5, 'Dhamrai'),
      new City(2, 5, 'Savar'),
      new City(3, 6, 'Majar'),
      new City(4, 6, 'moulovi bazar'),
      new City(5, 7, 'Kapasia'),
      new City(6, 7, 'Sadar')
   

    ];
  }
}
