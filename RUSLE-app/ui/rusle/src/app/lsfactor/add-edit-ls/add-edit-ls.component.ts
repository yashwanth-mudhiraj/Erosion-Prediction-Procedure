import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-ls',
  templateUrl: './add-edit-ls.component.html',
  styleUrls: ['./add-edit-ls.component.css']
})
export class AddEditLsComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() ls:any;
  Id:number=0;
  Location:string="";
  LSvalue:number=0;

  ngOnInit(): void {
    this.Id = this.ls.Id;
    this.Location = this.ls.Location;
    this.LSvalue = this.ls.LSvalue;
  }

  addLSval(){
    var val = {
      Id : this.Id,
      Location : this.Location,
      LSvalue : this.LSvalue
    }
    this.service.addLSval(val).subscribe(res=>{
      alert(res.toString());
    })
  }

  updateLSval(){
    var val = {
      Id : this.Id,
      Location : this.Location,
      LSvalue : this.LSvalue
    }
    this.service.updateLSval(val).subscribe(res=>{
      console.log("my value");
      alert(res.toString());
    })
  }

}
