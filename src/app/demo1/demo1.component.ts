import {Component, Input} from "@angular/core";
@Component ({
  selector: 'app-student',
  templateUrl: 'demo1.component.html'
})

export class StudentComponent extends Component{
@Input()
  STname ?: string;
}
