import {Component, Input} from "@angular/core";
  import {HttpClient} from "@angular/common/http";
import {Ispecialmenu, Ispecial} from "../../interface/todayspecial.interface";


@Component(
  {
    selector: 'app-todayspecial',
    templateUrl:'./todayspecial.component.html'
  })
export class TodayspecialComponent {
  data: Ispecial[] = []
  //tim cach lay du lieu tu api roi cho vao bien data
  constructor(private http: HttpClient) {
  }
  ngOnInit(){// ham nay tu dong chay khi print giao dien
    const url='https://foodgroup.herokuapp.com/api/today-special';
    this.http.get<Ispecialmenu>(url).subscribe(data => {
      this.data = data.data;
    });
  }
}
