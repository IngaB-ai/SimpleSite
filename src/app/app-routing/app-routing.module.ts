import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopCrimesComponent  } from '../components/top-crimes/crimesView/top-crimes.component';
import { CrimesDetailsComponent } from '../components/top-crimes/crimesDetail/crimes-details.component';
import { TopPlayersComponent   } from '../components/top-players/top-players.component';
import { TopTeamsComponent   } from '../components/top-teams/top-teams.component';


// Define app routes
const routes: Routes = [
  // { path: '', component: app },
  { path: 'topPlayers', component: TopPlayersComponent  },
  { path: 'topCrimes', component: TopCrimesComponent },
  { path: 'topPlayers/:crime', component: CrimesDetailsComponent },
  { path: 'topTeams', component: TopTeamsComponent },


];

@NgModule({
  imports: [ RouterModule.forRoot(routes), ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
