import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-c',
  templateUrl: './add-edit-c.component.html',
  styleUrls: ['./add-edit-c.component.css']
})
export class AddEditCComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() c:any;
  Id:number=0;
  Cover:string="";
  Cfactor:number=0;
  CRef:string="";

  ngOnInit(): void {
    this.Id = this.c.Id;
    this.Cover = this.c.Cover;
    this.Cfactor = this.c.Cfactor;
    this.CRef = this.c.CRef;

  }

  addCval(){
    var val = {
      Id : this.Id,
      Cover : this.Cover,
      Cfactor : this.Cfactor,
      CRef : this.CRef
    }
    this.service.addCval(val).subscribe(res=>{
      alert(res.toString());
    })
  }


  updateCval(){
    var val = {
      Id : this.Id,
      Cover : this.Cover,
      Cfactor : this.Cfactor,
      CRef : this.CRef
    }
    this.service.updateCval(val).subscribe(res=>{
      alert(res.toString());
    })
  }

}
