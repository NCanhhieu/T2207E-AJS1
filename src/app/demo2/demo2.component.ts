import {Component, Input} from "@angular/core";
@Component(
  {
    selector: 'app-classroom',
    templateUrl:'demo2.component.html'
  }
)
export class ClassroomComponent extends Component{
classroomname ='T2207E';
studentnumber = 12;
songuoi ='';
  @Input()
  tenlop ?: string;
upnumber(){
  this.studentnumber++;
}
studentname1 = 'nguyen van a';
studentname2 = 'nguyen van b';
studentname3 = 'nguyen van c';

}
