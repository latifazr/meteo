import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-meteo',
  templateUrl: './meteo.component.html',
  styleUrls: ['./meteo.component.css']
})
export class MeteoComponent implements OnInit {
  
  b: string;
  users: any;
  users1: any = [];
  d:any;
  weekday: any = [];
  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getUsers(this.data.country).subscribe(res => {
      this.users = res.list;
      console.log(this.users);
      this.b = this.data.country;


      for (let i = 0; i < this.users.length; i++) {

        if (this.users[i].dt_txt.split(' ')[1] === "12:00:00") {
          this.users1.push(this.users[i]);
        }
      }

      for (let i = 0; i < this.users1.length; i++) {
      this.users1[i].dt_txt = this.users1[i].dt_txt.split(' ')[0];

      this.d = new Date(this.users1[i].dt_txt);
    
      this.weekday[0] = "Sunday";
      this.weekday[1] = "Monday";
      this.weekday[2] = "Tuesday";
      this.weekday[3] = "Wednesday";
      this.weekday[4] = "Thursday";
      this.weekday[5] = "Friday";
      this.weekday[6] = "Saturday";
      this.users1[i].dt_txt = this.weekday[this.d.getDay()];
    }

    for (let i = 0; i < this.users1.length; i++) {
    this.users1[i].main.temp = this.users1[i].main.temp - 273.15
  }
    }
    );
  }
}