import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AddEditProComponent } from 'src/app/projects/add-edit-pro/add-edit-pro.component'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  constructor(private service:SharedService, private dialog: MatDialog) { }



  title = 'rusle';


  @Input() fac:any;
  LSvalue1:number=0;
  Cvalue1:number=0;
  Pvalue1:number=0;
  Rvalue1:number=0;
  Kvalue1:number=0;
  calVal1:number=0;
  LSvalue2:number=0;
  Cvalue2:number=0;
  Pvalue2:number=0;
  Rvalue2:number=0;
  Kvalue2:number=0;
  calVal2:number=0;

  proList:any=[]
  editFlag:any;
  Id:any;

  pro:any;
  ModalTitle:string="";
  ActivateAddEditProComp:Boolean=false;
  

  
  ngOnInit(): void {
    this.refreshProList();
  }

  openDialog(pro: any) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
       LSvalue1: pro.LSvalue1,
      Cvalue1: pro.Cvalue1,
      Pvalue1: pro.Pvalue1,
       Rvalue1: pro.Rvalue1,
      Kvalue1: pro.Kvalue1,
      calVal1: pro.calVal1,
      LSvalue2: pro.LSvalue2,
      Cvalue2: pro.Cvalue2,
     Pvalue2: pro.Pvalue2,
      Rvalue2: pro.Rvalue2,
      Kvalue2: pro.Kvalue2,
      calVal2: pro.calVal2,
    };
    console.log(dialogConfig.data);
    this.ActivateAddEditProComp = true;
    const dialogRef = this.dialog.open(AddEditProComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      console.log("the dialog was closed");
      this.refreshProList();
    })
  }

  addClick(){
    this.ModalTitle="Add New Project";
    this.ActivateAddEditProComp=true;
  }

  closeClick(){
    this.ActivateAddEditProComp=false;
    this.refreshProList();
  }

  refreshProList(){
    this.service.getProlist().subscribe(data=>{
      this.proList = data;
    })
  }

  cal(val:any,id:any){
    if(id==1){
      this.calVal1 = parseFloat((val.Cvalue1 * val.Kvalue1 * val.LSvalue1 * val.Pvalue1 * val.Rvalue1).toFixed(4));
    }
    else if(id==2){
      this.calVal2 = parseFloat((val.Cvalue2 * val.Kvalue2 * val.LSvalue2 * val.Pvalue2 * val.Rvalue2).toFixed(4));
    }
  }

  onChangeEvent (num:any){
    if(num==1){
      if(this.Kvalue1<0.24){
        this.Kvalue1 = 0.24
      }
      else if(this.Kvalue1>4.4){
        this.Kvalue1 = 0.4
      }
    }
    else{
      if(this.Kvalue2<0.24){
        this.Kvalue2 = 0.24
      }
      else if(this.Kvalue2>4.4){
        this.Kvalue2 = 0.4
      }
    }
  }

  editSubparent(val:any){
    this.editFlag = true;
    this.LSvalue1 = val.LS_pre
    this.Cvalue1 = val.C_pre 
    this.Pvalue1 = val.P_pre 
    this.Rvalue1 = val.R_pre
    this.Kvalue1 = val.K_pre 
    this.calVal1 = val.PreSoilLoss
    this.LSvalue2 = val.LS_post 
    this.Cvalue2 = val.C_post
    this.Pvalue2 = val.P_post
    this.Rvalue2 = val.R_post
    this.Kvalue2 = val.K_post
    this.calVal2 = val.PostSoilLoss
    this.Id = val.Id
  }

  cancelEdit(){
    this.editFlag = false;
    this.LSvalue1 = 0
    this.Cvalue1 = 0
    this.Pvalue1 = 0
    this.Rvalue1 = 0
    this.Kvalue1 = 0
    this.calVal1 = 0
    this.LSvalue2 = 0
    this.Cvalue2 = 0
    this.Pvalue2 = 0
    this.Rvalue2 = 0
    this.Kvalue2 = 0
    this.calVal2 = 0
  }

  updateClick(val:any){
    var updateObj = {
    Id : val.Id,
    LS_pre : val.LSvalue1,
    C_pre : val.Cvalue1,
    P_pre : val.Pvalue1,
    R_pre : val.Rvalue1,
    K_pre : val.Kvalue1,
    LS_post : val.LSvalue2,
    C_post : val.Cvalue2,
    P_post : val.Pvalue2,
    R_post : val.Rvalue2,
    K_post : val.Kvalue2,
    PreSoilLoss : val.calVal1,
    PostSoilLoss : val.calVal2
    }
    this.service.updateSubsiteval(updateObj).subscribe(res=>{
      alert(res.toString());
      this.cancelEdit();
      window.location.reload();
    })
  }
}
