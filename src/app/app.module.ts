import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { ChartsModule } from 'ng2-charts';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { TopCrimesComponent } from './components/top-crimes/crimesView/top-crimes.component';
import { TopPlayersComponent } from './components/top-players/top-players.component';
import { TopTeamsComponent } from './components/top-teams/top-teams.component';
import { CrimesDetailsComponent } from './components/top-crimes/crimesDetail/crimes-details.component'

import { TopTeamsForCrimeService} from './components/top-teams/service/top-teams-for-crime.service'
import { TopCrimesService} from './components/top-crimes/service/top-crimes.service';


@NgModule({
  declarations: [
    AppComponent,
    TopCrimesComponent,
    TopPlayersComponent,
    TopTeamsComponent,
    CrimesDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ChartsModule,
  ],
  providers: [ TopTeamsForCrimeService, TopCrimesService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
