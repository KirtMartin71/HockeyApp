import { Component, OnInit } from '@angular/core';
import { TeamsService } from 'src/app/services/teams.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {

  teamList: any[];
  missingCardsForRow: number = 0;

  constructor(private teamsService: TeamsService) { }

  ngOnInit(): void {
    this.teamsService.getAllTeams().subscribe(data => {
      this.teamList = data;
      this.missingCardsForRow = (Math.ceil(this.teamList.length / 3) * 3) - this.teamList.length;
    });
  }

}
