import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-lsfactor',
  templateUrl: './lsfactor.component.html',
  styleUrls: ['./lsfactor.component.css']
})
export class LsfactorComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() lsSelected:any;

  LsNewfactorList:any=[]

  ngOnInit(): void {
    this.refreshLsNewList();
  }

  refreshLsNewList(){
    this.service.getLSNewlist().subscribe(data=>{
      this.LsNewfactorList = data;
    })
  }
}
