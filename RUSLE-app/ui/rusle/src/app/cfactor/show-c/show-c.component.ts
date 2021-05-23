import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-c',
  templateUrl: './show-c.component.html',
  styleUrls: ['./show-c.component.css']
})
export class ShowCComponent implements OnInit {

  constructor(private service:SharedService) { }

  CfactorList:any=[];

  ModalTitle:string="";
  ActivateAddEditCComp:boolean=false;
  c:any;
  recordStatus:String="Deleted";

  ngOnInit(): void {
    this.refreshCList();
  } 

  addClick(){
    this.c={
      Cover:"",
      Cfactor:0,
      CRef:""
    }
    this.ModalTitle="Add C Factor";
    this.ActivateAddEditCComp=true;
  }

  editClick(item:any){
    this.c = item;
    this.ModalTitle = "Edit C Factor";
    this.ActivateAddEditCComp = true;
  }

  deleteClick(item:any){
    if(confirm('Are you sure?')){
      var val = {
        Id : item.Id,
        Cover : item.Cover,
        Cfactor : item.Cfactor,
        CRef : item.CRef,
        recordstatus: this.recordStatus
      }
      this.service.deleteCval(val).subscribe(res=>{
        this.refreshCList();
      })
    }
  }


  closeClick(){
    this.ActivateAddEditCComp=false;
    this.refreshCList();
  }

  refreshCList(){
    this.service.getClist().subscribe(data=>{
      var newCfactorList: any[] = [];
      for (var i = 0; i < data.length; i++){
        
        if(data[i].recordstatus != "Deleted"){
          newCfactorList.push(data[i]);
        }
      }
      this.CfactorList = newCfactorList;
    })
  }

}
