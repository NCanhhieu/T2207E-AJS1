import {Component, Input} from "@angular/core";
import {IStudent} from "../../interface/student.interface";

@Component(
  {
    selector: 'app-home',
    templateUrl:'./home.component.html'
  })
export class HomeComponent extends Component{
student: IStudent = {id : 1, name:'nam', age: 17, address:'hanoi'};

arrayNumber: number[] = [1 , 2 , 3];
stringArray:string[] = ["Nguyen van a", "dang thai b", "tran hai c"];

ls: IStudent[] = [
  { id: 1, name: "nguyen van a", age: 17, address: "hanoi"},
  { id: 2, name: "nguyen van b", age: 18, address: "hcm"},
  { id: 3, name: "nguyen van c", age: 15, address: "saigon"},
  { id: 4, name: "nguyen van d", age: 21, address: "hue"}
];
}
