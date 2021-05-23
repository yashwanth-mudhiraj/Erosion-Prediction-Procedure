import { Component, OnInit, Output, EventEmitter  } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { DomSanitizer, SafeHtml, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-show-pro',
  templateUrl: './show-pro.component.html',
  styleUrls: ['./show-pro.component.css']
})
export class ShowProComponent implements OnInit {

  constructor(private service:SharedService, private sanitizer:DomSanitizer) { }

  @Output() newItemEvent = new EventEmitter<any>();

  proList:any=[]
  subList:any=[]
  avgPre:any=0
  avgPost:any=0

  pro:any;
  ModalTitle:string="";
  ActivateAddEditProComp:Boolean=false;
  recordStatus:String="Deleted";
  image: SafeResourceUrl="";

  ngOnInit(): void {
    this.refreshProList();
  }

  addClick(){
    this.pro={
    }
    this.ModalTitle="Add New Project";
    this.ActivateAddEditProComp=true;
  }

  closeClick(){
    this.ActivateAddEditProComp=false;
    this.refreshProList();
  }

  refreshProList(){
    this.service.getProlist().subscribe(data=>{
      this.image = "";
      var newSubList: any[] = [];
      for (var i = 0; i < data.length; i++){
        newSubList = [];
        for(var j = 0; j < data[i].subsites.length; j++){
          if(data[i].subsites[j].recordstatus != "Deleted"){
            let objectURL =  data[i].subsites[j].ProjectImage;
            if(objectURL){
              this.image = this.sanitizer.bypassSecurityTrustResourceUrl(
                'data:image/png;base64,' + objectURL);
                data[i].subsites[j].image = this.image
            }
            else{
              data[i].subsites[j].image = ""
            }
            
            newSubList.push(data[i].subsites[j]);
          }
        }
        data[i].subsites = newSubList;
    }
      data.forEach(function (value) {
        value.From_date = new Date(value.From_date);
        value.To_date = new Date(value.To_date);
        if(value.subsites){
          var preLoss = 0;
          var postLoss = 0;
          value.subsites.forEach(function (val:any){
            preLoss =  preLoss + val.PreSoilLoss
            postLoss =  postLoss + val.PostSoilLoss
          }) 
          value.PreSoilLoss = preLoss / value.subsites.length ? (preLoss / value.subsites.length).toFixed(4) : 0
          value.PostSoilLoss = postLoss / value.subsites.length ? (postLoss / value.subsites.length).toFixed(4) : 0
        }
      });
      
      this.proList = data;

    })
  }
  

  editSubsite(value: any) {
    this.newItemEvent.emit(value);
  }

  deleteClick(item:any){
    if(confirm('Are you sure?')){
      var val = {
        Id : item.Id,
        C_pre: item.C_pre,
        Desc: item.Desc,
        From_date: item.From_date,
        K_post: item.K_post,
        K_pre: item.K_pre,
        LS_post: item.LS_post,
        C_post: item.C_post,
        LS_pre: item.LS_pre,
        Name: item.Name,
        P_post: item.P_post,
        P_pre: item.P_pre,
        PostSoilLoss: item.PostSoilLoss,
        PreSoilLoss: item.PreSoilLoss,
        ProjectId: item.ProjectId,
        R_post: item.R_post,
        R_pre: item.R_pre,
        To_date: item.To_date,
        recordstatus: this.recordStatus
      }
      this.service.deleteSubsiteval(val).subscribe(res=>{
        this.refreshProList();
      })
    }
  }

}
