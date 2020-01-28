import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-emp',
  templateUrl: './add-emp.component.html',
  styleUrls: ['./add-emp.component.css']
})
export class AddEmpComponent implements OnInit {

  id = "";
  name = "";
  sal = "";
  dept = "";
  @Output() empCreated = new EventEmitter();

  onAddEmp()
  {
    const emp = {
              id: this.id,
              name: this.name,
              sal: this.sal,
              dept: this.dept

    };
    this.empCreated.emit(emp);
  }

  constructor() { }

  ngOnInit() {
  }

}
