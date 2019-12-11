import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {Players} from '../top-players/player.model'

@Component({
  selector: 'app-top-players',
  templateUrl: './top-players.component.html',
  styleUrls: ['./top-players.component.css']
})
export class TopPlayersComponent implements OnInit {
  @Input() players: Players;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }

}
