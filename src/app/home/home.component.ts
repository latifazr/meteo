import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { DataService } from '../data.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  a: string;
  constructor( private router: Router,private data: DataService) { }
  
  ngOnInit() {
    
  }

  recherche() {
    this.data.country=this.a;
    this.router.navigate(['/meteo']);
  }

  }

