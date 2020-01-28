import { Component, OnInit , Input} from '@angular/core';
import { Emp } from '../emp.model';

@Component({
  selector: 'app-display-emp',
  templateUrl: './display-emp.component.html',
  styleUrls: ['./display-emp.component.css']
})
export class DisplayEmpComponent implements OnInit {
  @Input() emp = [];

  constructor() {
    console.log(this.emp);
   }

  ngOnInit() {
  }

}
