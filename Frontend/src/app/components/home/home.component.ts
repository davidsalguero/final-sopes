import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(private router: Router) { }
  nombre = localStorage.getItem('nombre');
  foto = 'assets/back.png';

  ngOnInit(): void {
  }

  logOut() {
    localStorage.clear();
    this.router.navigate(['login']);
  }

}
