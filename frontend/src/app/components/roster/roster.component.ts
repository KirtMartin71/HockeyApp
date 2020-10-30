import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Team } from 'src/app/model/team';
import { TeamsService } from 'src/app/services/teams.service';

@Component({
  selector: 'app-roster',
  templateUrl: './roster.component.html',
  styleUrls: ['./roster.component.css']
})
export class RosterComponent implements OnInit {

  teamId: number;
  team: Team;

  constructor(private activatedRoute: ActivatedRoute, private teamsService: TeamsService) { }

  ngOnInit(): void {
    this.teamId = +this.activatedRoute.snapshot.params.id;

    this.teamsService.getTeam(this.teamId).subscribe(data => {
      this.team = data;
    });
  }

}
