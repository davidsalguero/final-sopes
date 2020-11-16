import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private http: HttpClient) { }
  usuario: string;
  password: string;
  usuarios = [];

  ngOnInit(): void {
    this.cargarUsuarios();
  }

  ingresar() {
    this.usuarios.forEach(user => {
      if (user.user === this.usuario && user.password === this.password) {
        localStorage.setItem('nombre', user.name);
        this.router.navigate(['home']);
      }
    });
    this.usuario = '';
    this.password = '';
  }

  cargarUsuarios() {
    this.http.get('http://localhost:5000/getUsers')
    .toPromise().then((data: any) => {
      this.usuarios = data;
    });
  }

}
