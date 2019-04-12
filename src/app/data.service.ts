import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  // Import it up here
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  country:any;
  constructor(private http: HttpClient) { }
  getUsers(a: any) :Observable<any> {
   return this.http.get<any>(`https://cors.io/?https://api.openweathermap.org/data/2.5/forecast?q=${a}&appid=7c42fefe7f02fd3e57e2e0b3ed1c59d2`)
  }
}

