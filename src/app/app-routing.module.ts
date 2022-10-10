import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfiloUtenteComponent } from './pages/profilo-utente/profilo-utente.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'profilo-utente', component: ProfiloUtenteComponent },
  { path: 'home', component: HomeComponent },
  { path: '',   redirectTo: '/profilo-utente', pathMatch: 'full' },
  { path: '**', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
