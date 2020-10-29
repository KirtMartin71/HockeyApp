import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeamsService {

  constructor(private http: HttpClient) { }

  getAllTeams(): Observable<string[]> {

    return this.http.get<string[]>('http://localhost:5000/api/team');
  }

}
