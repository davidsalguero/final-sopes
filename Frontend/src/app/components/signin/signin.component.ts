import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  constructor(private router: Router, private http: HttpClient) { }
  nombre: string;
  usuario: string;
  password: string;
  password2: string;

  ngOnInit(): void {
  }

  registrarse() {
    if (this.password === this.password2 && this.password !== '' && this.password !== undefined) {
      this.regsitrar();
      localStorage.setItem('nombre', this.nombre);
      this.router.navigate(['home']);
    } else {
      this.limpiar();
    }
  }

  limpiar() {
    this.nombre = '';
    this.usuario = '';
    this.password2 = '';
    this.password = '';
  }

  regsitrar() {
    this.http.post('http://34.70.108.240:5000/insertarMongo',
        {
          user: this.usuario,
          password: this.password,
          name: this.nombre
        }).toPromise().then((data: any) => {
          console.log(data);
        });
  }
}
