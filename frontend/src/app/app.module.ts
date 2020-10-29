import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TeamsComponent } from './components/teams/teams.component';
import { Routes, RouterModule } from '@angular/router';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TeamsService } from './services/teams.service';
import { HttpClientModule } from '@angular/common/http';
import { RosterComponent } from './components/roster/roster.component';
import { PlayerComponent } from './components/player/player.component';

const appRoutes: Routes = [
  {path: '', component: TeamsComponent},
  {path: 'roster/:id', component: RosterComponent},
  {path: 'player/:id', component: PlayerComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    TeamsComponent,
    NavBarComponent,
    RosterComponent,
    PlayerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [
    TeamsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
