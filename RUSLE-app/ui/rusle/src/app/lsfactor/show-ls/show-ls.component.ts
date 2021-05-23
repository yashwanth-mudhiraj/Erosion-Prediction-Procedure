import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-ls',
  templateUrl: './show-ls.component.html',
  styleUrls: ['./show-ls.component.css']
})

export class ShowLsComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Output() lsSelected: EventEmitter<number> = new EventEmitter();

  LsfactorList:any=[];
  LsNewfactorList:any=[]
  SheetFlowVal:any;
  deletedList:any=[];
  

  ModalTitle:string="";
  ActivateAddEditLsComp:boolean=false;
  ActivateSelectComp:boolean=false;
  ls:any;
  selected:any;
  sheet_flow:any;
  avg_water:any;
  LSFetch:any;
  recordStatus:String="Deleted";

  ngOnInit(): void {
    this.refreshLsList();
    this.refreshLsNewList();
  } 

  addClick(){
    this.ls={
      Location:"",
      LSvalue:0
    }
    this.ModalTitle="Add LS Factor";
    this.ActivateAddEditLsComp=true;
  }

  editClick(item:any){
    this.ls = item;
    this.ModalTitle = "Edit LS Factor";
    this.ActivateAddEditLsComp = true;
  }

  deleteClick(item:any){
     if(confirm('Are you sure?')){
       var val = {
         Id : item.Id,
         Location : item.Location,
         LSvalue : item.LSvalue,
         recordstatus: this.recordStatus
       }
       this.service.deleteLSval(val).subscribe(res=>{
         this.refreshLsList();
       })
     }
   }


  closeClick(){
    this.ActivateAddEditLsComp=false;
    this.refreshLsList();
  }


  public onOptionsSelected(selected:any,event:any) {
    const value = event.target.value;
    this.selected = value;
 }


  refreshLsList(){
    this.service.getLSlist().subscribe(data=>{
      var newLSFactorList: any[] = [];
      for (var i = 0; i < data.length; i++){
        
        if(data[i].recordstatus != "Deleted"){
          newLSFactorList.push(data[i]);
        }
      }
      this.LsfactorList = newLSFactorList;
    })
  }

  refreshLsNewList(){
    this.service.getLSNewlist().subscribe(data=>{
      this.SheetFlowVal = 1;
      this.LsNewfactorList = data;
    })
  }

  fetchLS(sheet_flow:any,avg_water:any){
    console.log(sheet_flow,avg_water)
    this.service.getLSNewlist().subscribe(data=>{
      this.LSFetch = (data.find(x=> ((x.Sheet_flow_len == sheet_flow) && (x.Avg_water_slope == avg_water)))).LSvalue;
    })
  }

  
}
