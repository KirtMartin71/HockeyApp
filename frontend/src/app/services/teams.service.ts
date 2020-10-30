import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Team } from '../model/team';

@Injectable({
  providedIn: 'root'
})
export class TeamsService {

  constructor(private http: HttpClient) { }

  getAllTeams(): Observable<string[]> {

    return this.http.get<string[]>('http://localhost:5000/api/team');
  }

  getTeam(teamId: number): Observable<Team> {

    return this.http.get<Team>('http://localhost:5000/api/team/' + teamId);
  }

}
