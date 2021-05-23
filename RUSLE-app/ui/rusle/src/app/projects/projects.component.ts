import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor() { }

  @Output() newItemEvent1 = new EventEmitter<any>();

  ngOnInit(): void {
  }

  editSub(val:any){
    this.newItemEvent1.emit(val);
  }

}
