import {Component} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {IFoodMenu, Imenu} from "../../interface/food.interface";
import {Iweather, list} from "../../interface/weather.interface";
import {Ispecial} from "../../interface/todayspecial.interface";

@Component(
  {
    selector: 'app-weather',
    templateUrl:'./weather.component.html'
  })
export class WeatherComponent {
  data: list[] = [];
  fore : weather[] =[];
  constructor(private http: HttpClient) {
  }
  ngOnInit(){
    const url='http://api.openweathermap.org/data/2.5/forecast?q=Hanoi,vietnam&appid=09a71427c59d38d6a34f89b47d75975c&units=metric';
    this.http.get<Iweather>(url).subscribe(data => {
      this.data = data.list;
    });
    this.http.get<{data:list[]}>(url).subscribe(data => {
      this.fore = data.data;
    })
  }

}
