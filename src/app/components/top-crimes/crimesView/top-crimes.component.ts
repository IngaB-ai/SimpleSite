import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Crimes} from '../crime.model';
import {  TopCrimesService } from '../service/top-crimes.service';
import { Location } from '@angular/common';

// import { Filter } from '../../core/filter';

@Component({
  selector: 'app-top-crimes',
  templateUrl: './top-crimes.component.html',
  styleUrls: ['./top-crimes.component.css']
})
export class TopCrimesComponent implements OnInit {

  
  @Input() crimes: Crimes[];

  constructor(
    private http: HttpClient, 
    private topCrimesService: TopCrimesService, 
    private location: Location) {}

  ngOnInit() {
    this.getCrimes();
  }

  getCrimes() {
    this.topCrimesService.getCrimes().subscribe(res => {
      this.crimes = res;
      console.log(res)
    });
  }

  

}
