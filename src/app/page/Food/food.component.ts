import {Component, Input} from "@angular/core";
import {IFoodMenu, Imenu} from "../../interface/food.interface";
import {HttpClient} from "@angular/common/http";
import {Ispecial} from "../../interface/todayspecial.interface";


@Component(
  {
    selector: 'app-food',
    templateUrl:'./food.component.html'
  })
export class FoodComponent {
 data: Imenu[] = [];
  food: Ispecial[] = [];
  //tim cach lay du lieu tu api roi cho vao bien data
  constructor(private http: HttpClient) {
  }
  ngOnInit(){// ham nay tu dong chay khi print giao dien
   const url='https://foodgroup.herokuapp.com/api/menu';
   this.http.get<IFoodMenu>(url).subscribe(data => {
     this.data = data.data;
   });

 const url2 ="https://foodgroup.herokuapp.com/api/today-special";
    this.http.get<{data:Ispecial[]}>(url2).subscribe(data => {
      this.food = data.data;
    })
}
 }

