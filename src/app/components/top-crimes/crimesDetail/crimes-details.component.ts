import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Crimes} from '../crime.model';
import {  TopCrimesService } from '../service/top-crimes.service';
import { Location } from '@angular/common';
import { Chart } from 'chart.js';
import { ChartsModule } from 'ng2-charts';

@Component({
  selector: 'app-crimes-details',
  templateUrl: './crimes-details.component.html',
  styleUrls: ['./crimes-details.component.css']
})
export class CrimesDetailsComponent implements OnInit {

  topPlayers:any;
  chart = []; 
  @Input() crimes: Crimes[];

  constructor(private route: ActivatedRoute,
    private topCrimesService: TopCrimesService, 
    private location: Location) {}

  // public doughnutChartLabels = ['Sales Q1', 'Sales Q2', 'Sales Q3', 'Sales Q4'];
  // public doughnutChartData = [120, 150, 180, 90];
  // public doughnutChartType = 'doughnut';

  ngOnInit() {
    this.getCrime();
    const routeParams = this.route.snapshot.params;
    console.log("params", routeParams)
  }

  getCrime(): void {
    const crimeInq = this.route.snapshot.paramMap.get('crime');
    // console.log("params", routeParams)
  console.log("holla",crimeInq)
  this.topCrimesService.getCrimeTopPlayer(crimeInq).subscribe(topPlayers => {
    this.topPlayers = topPlayers;
    console.log("wha", this.topPlayers)
  });
  }

}
