import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MeteoService {
  constructor(private http:HttpClient){}
  getData(){
    return this.http.get('https://prevision-meteo.ch/services/json/toulouse');
  }
}
