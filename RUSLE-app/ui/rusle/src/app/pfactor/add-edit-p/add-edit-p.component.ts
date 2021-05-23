import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-p',
  templateUrl: './add-edit-p.component.html',
  styleUrls: ['./add-edit-p.component.css']
})
export class AddEditPComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() p:any;
  Id:number=0;
  Support_Practices:string="";
  Pfactor:number=0;
  PRef:string=""

  ngOnInit(): void {
    this.Id = this.p.Id;
    this.Support_Practices = this.p.Support_Practices;
    this.Pfactor = this.p.Pfactor;
    this.PRef = this.p.PRef;
  }

  addPval(){
    var val = {
      Id : this.Id,
      Support_Practices : this.Support_Practices,
      Pfactor : this.Pfactor,
      PRef : this.PRef
    }
    this.service.addPval(val).subscribe(res=>{
      alert(res.toString());
    })
  }

  updatePval(){
    var val = {
      Id : this.Id,
      Support_Practices : this.Support_Practices,
      Pfactor : this.Pfactor,
      PRef : this.PRef
    }
    this.service.updatePval(val).subscribe(res=>{
      alert(res.toString());
    })
  }

}
