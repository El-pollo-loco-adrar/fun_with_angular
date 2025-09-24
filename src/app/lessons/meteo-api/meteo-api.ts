import { Component } from '@angular/core';
import { MeteoService } from '../../services/meteo.service';
@Component({
  selector: 'app-meteo-api',
  imports: [],
  templateUrl: './meteo-api.html',
  styleUrl: './meteo-api.css'
})
export class MeteoApi {
  title: string = 'apiData';
  newData: any;

  constructor(private apiService:MeteoService){}

  ngOnInit(){
    this.apiService.getData().subscribe(res=>{
      this.newData=res;
      console.log(this.newData);
      console.log(this.newData.city_info.name);
    })
  }
}
