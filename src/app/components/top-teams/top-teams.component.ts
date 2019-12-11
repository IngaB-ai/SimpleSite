import { Component, OnInit, Input } from '@angular/core';
import { Team } from '../top-teams/team.model';

@Component({
  selector: 'app-top-teams',
  templateUrl: './top-teams.component.html',
  styleUrls: ['./top-teams.component.css']
})
export class TopTeamsComponent implements OnInit {
  @Input() team: Team;

  constructor() { }

  ngOnInit() {
  }

}
