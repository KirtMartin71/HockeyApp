import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-roster',
  templateUrl: './roster.component.html',
  styleUrls: ['./roster.component.css']
})
export class RosterComponent implements OnInit {

  public teamId: number;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.teamId = +this.activatedRoute.snapshot.params.id;
  }

}
