import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardComponent } from './compo/dashboard/DashboardComponent';
import { ProfileComponent } from './compo/profile/profile.component';
// import { AdministarteurComponent } from './service/administarteur/administarteur.component';
import { UtilisateurComponent } from './compo/utilisateur/utilisateur.component';
import { AlphabetComponent } from './compo/alphabet/alphabet.component';
import { MotsComponent } from './compo/mots/mots.component';
import { PhraseComponent } from './compo/phrase/phrase.component';
import { QuizComponent } from './compo/quiz/quiz.component';
import { AdministrateurComponent } from './compo/administrateur/administrateur.component';

const routes: Routes = [
      {path:'administarteur',component:AdministrateurComponent,},
      {path:'',component:DashboardComponent,},
      {path:'profile',component:ProfileComponent,},
      {path:'utilisateur',component:UtilisateurComponent,},
      {path:'alphabet',component:AlphabetComponent,},
      {path:'mots',component:MotsComponent,},
      {path:'phrase',component:PhraseComponent,},
      // {path:'phrase1',component:PhraseComponent,},
      {path:'quiz',component:QuizComponent,},

       ];

@NgModule({
  declarations:[
    AppComponent,
    DashboardComponent,
    MotsComponent,
    ProfileComponent,
    UtilisateurComponent,
    AlphabetComponent,
    PhraseComponent,
    // Phrase1Component,
    QuizComponent
  ],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
