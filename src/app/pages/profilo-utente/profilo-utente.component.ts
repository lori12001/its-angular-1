import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profilo-utente',
  templateUrl: './profilo-utente.component.html',
  styleUrls: ['./profilo-utente.component.scss'],
})
export class ProfiloUtenteComponent {
  jsonIn = {
    tipoPersona: 'pf',
    codFisc: '',
    iva: '',
    nome: '',
    cognome: '',
    ragSoc: '',
    email: '',
    telefono: '',
    fax: '',
    annoDiNascita: '',
    tipoVia: '',
    numCiv: '',
    cap: '',
    comune: '',
    provincia: '',
    stato: '',
    maschio: '',
    femmina: '',
    
  };

  @ViewChild('loginForm') loginForm!: NgForm;
  showErrors = false;
  showPassword = false;

  constructor(private router: Router) {}

  signIn() {
    if (this.loginForm.form.invalid) {
      this.showErrors = true;
    } else {
      this.router.navigateByUrl('/home');
    }
  }
}
