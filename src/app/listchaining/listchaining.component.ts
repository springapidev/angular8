import { Component, OnInit } from '@angular/core';
import { Country } from '../topnav/country';
import { State } from '../topnav/state';
import { ChainService } from '../chain.service';
import { City } from './city';

@Component({
  selector: 'app-listchaining',
  templateUrl: './listchaining.component.html',
  styleUrls: ['./listchaining.component.scss']
})
export class ListchainingComponent implements OnInit {
  selectedCountry:Country = new Country(0, 'Bangladesh'); 

  countries: Country[];
  states: State[];
  cities: City[];


  constructor(private chainservice : ChainService) {
    this.countries = this.chainservice.getCountries();
  }
  
  ngOnInit() {
  }
 

  onSelectCountry(countryid) {
console.log(countryid);
    this.states = this.chainservice.getStates().filter((item)=> item.countryid == countryid);
  }
  onSelectState(stateid) {
    console.log(stateid);
        this.cities = this.chainservice.getCities().filter((item)=> item.stateid == stateid);
      }
}
