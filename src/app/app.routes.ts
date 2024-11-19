import { Routes } from '@angular/router'
import { AdminDashboardComponent } from './Component/admin-dashboard/admin-dashboard.component'
// import { ZoneDashboardComponent } from './Component/zone-dashboard/zone-dashboard.component'
import { EquipeDashboardComponent } from './Component/equipe-dashboard/equipe-dashboard.component'
// import { LoginComponent } from './Component/login/login.component'
import { UserManagementComponent } from './Component/user-management/user-management.component'
// import { TirageListComponent } from './Component/tirage/tirages-list.component'
import { AcceuilComponent } from './Component/acceuil/acceuil.component'
// import { MatcheComponent } from './Component/matche/matche.component'
// import { ZoneDashboardComponent } from './Component/zone-dashboard/zone-dashboard.component'
import { NotFoundComponent } from './Component/not-found/not-found.component'
import { ConnexionComponent } from './Component/connexion/connexion.component'
import {  InscriptionZoneComponent } from './Component/inscriptionZone/inscription.component'
import { InscriptionEquipeComponent } from './Component/inscriptionEquipe/inscription.component'
// import { CompetitionComponent } from './Component/Competitions/competition_form/competition_form.component'
import { GalerieComponent } from './Component/galerie/galerie.component'
import { JoueurComponent } from './Component/joueur/joueur.component';
import { ArticleListComponent } from './Component/articles/article-list/article-list.component'
import { ArticleFormComponent } from './Component/articles/article-form/article-form.component'
import { ArticleDetailsComponent } from './Component/articles/article-details/article-details.component'
import { ZoneDetailsComponent } from './Component/Zone/zone-details/zone-details.component'
import { ZonesListComponent } from './Component/Zone/zones-list/zones-list.component'
import { CompetitionsListComponent } from './Component/Competition/competition-list/competition-list.component'
import { CompetitionFormComponent } from './Component/Competition/competition-form/competition-form.component'
import { CompetitionDetailsComponent } from './Component/Competition/competition-details/competition-details.component'
import { ZoneEquipeComponent } from './Component/zone-equipe-component/zone-equipe-component.component'
import { TirageslistComponent } from './Component/tirage/tirages-list.component/tirages-list.component'
import { ZoneGuard } from './Guard/zone-guard.guard'
import { AdminGuard } from './Guard/admin-guard.guard'
// import { CompetitionDetailsComponent } from './Component/Competition/competition-details/competition-details.component'
// import { MatcheListComponent } from './components/matche-list/matche-list.component'

// import { EquipeListComponent } from './Component/equipe-list/equipe-list.component'




export const routes: Routes = [
  // { path: 'login', component: LoginComponent },
  { path: 'connexion', component: ConnexionComponent },
  { path: 'ajout/zone', component: InscriptionZoneComponent , canActivate: [AdminGuard] , data: { roles: ['admin'] } },
  { path: 'ajout/equipe', component: InscriptionEquipeComponent , canActivate: [ZoneGuard] , data: { roles: ['zone'] } },
  { path: 'galeries', component: GalerieComponent },
  { path: 'admin-dashboard', component: AdminDashboardComponent  ,canActivate: [AdminGuard] ,data: { roles: ['admin'] } },
  // { path: 'zones', component: ZoneDashboardComponent },
  { path: 'equipe-dashboard', component: EquipeDashboardComponent },
  { path: 'users', component: UserManagementComponent },
  {path: 'joueur', component: JoueurComponent},


   { path: 'articles', component: ArticleListComponent },
  { path: 'articles/create', component: ArticleFormComponent ,canActivate: [ZoneGuard] , data: { roles: ['zone'] }},
  { path: 'articles/:id', component: ArticleDetailsComponent ,canActivate: [ZoneGuard], data: { roles: ['zone'] } },
  { path: 'articles/edit/:id', component: ArticleFormComponent ,canActivate: [ZoneGuard] , data: { roles: ['zone'] }},


   { path: 'zones', component: ZonesListComponent , canActivate: [AdminGuard] , data: { roles: ['admin'] }},  // Route to list all zones


  {path: 'zones/:id', component: ZoneDetailsComponent , canActivate: [ZoneGuard], data: { roles: ['zone'] }},  // Route to view zone details

  // { path: 'matches', component: MatcheListComponent },
  // { path: 'tirage', component: TiragesListComponent },
  
  { path: 'tirages', component: TirageslistComponent ,canActivate: [ZoneGuard] , data: { roles: ['zone'] }},
  // { path: 'tirages', component: TiragesListComponent },
  { path: 'tirages/lancer', component: TirageslistComponent , canActivate: [ZoneGuard] , data: { roles: ['zone'] }},
  { path: '', redirectTo: '/acceuil', pathMatch: 'full' },
  { path: 'acceuil', component: AcceuilComponent }, // Ensure this path and component are correct
  { path: 'competitions',component: CompetitionsListComponent ,canActivate: [ZoneGuard] },
    { path: 'competitions/create', component: CompetitionFormComponent  ,canActivate: [ZoneGuard] },
    { path: 'competitions/edit/:id', component: CompetitionFormComponent ,canActivate: [ZoneGuard]},
    { path: 'competitions/:id', component: CompetitionDetailsComponent ,canActivate: [ZoneGuard]},
  { path: 'zone-equipe', component: ZoneEquipeComponent ,canActivate: [ZoneGuard]},
  { path: '**', component: NotFoundComponent }

//  canActivate: [EquipeGuard],
// import { EquipeGuard } from './guards/equipe.guard';

]
