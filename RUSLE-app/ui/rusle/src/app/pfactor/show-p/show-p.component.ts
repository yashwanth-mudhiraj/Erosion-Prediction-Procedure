import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-p',
  templateUrl: './show-p.component.html',
  styleUrls: ['./show-p.component.css']
})
export class ShowPComponent implements OnInit {

  constructor(private service:SharedService) { }

  PfactorList:any=[];

  ModalTitle:string="";
  ActivateAddEditPComp:boolean=false;
  p:any;
  recordStatus:String="Deleted";

  ngOnInit(): void {
    this.refreshPList();
  } 

  addClick(){
    this.p={
      Id:0,
      Support_Practices:"",
      Pfactor:0,
      PRef:""
    }
    this.ModalTitle="Add P Factor";
    this.ActivateAddEditPComp=true;
  }

  editClick(item:any){
    this.p = item;
    this.ModalTitle = "Edit P Factor";
    this.ActivateAddEditPComp = true;
  }

  closeClick(){
    this.ActivateAddEditPComp=false;
    this.refreshPList();
  }

  deleteClick(item:any){
    if(confirm('Are you sure?')){
      var val = {
        Id : item.Id,
        Support_Practices : item.Support_Practices,
        Pfactor : item.Pfactor,
        PRef : item.PRef,
        recordstatus: this.recordStatus
      }
      this.service.deletePval(val).subscribe(res=>{
        this.refreshPList();
      })
    }
  }

  refreshPList(){
    this.service.getPlist().subscribe(data=>{
      var newPfactorList: any[] = [];
      for (var i = 0; i < data.length; i++){     
        if(data[i].recordstatus != "Deleted"){
          newPfactorList.push(data[i]);
        }
      }
      this.PfactorList = newPfactorList;
    })
  }

}
