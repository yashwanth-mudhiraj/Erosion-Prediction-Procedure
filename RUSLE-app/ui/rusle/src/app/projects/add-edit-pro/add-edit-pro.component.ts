import { Component, OnInit, Input, ViewChild, ElementRef, Inject } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig} from '@angular/material/dialog';
import {HttpClientModule, HttpClient, HttpRequest, HttpResponse, HttpEventType} from '@angular/common/http';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-edit-pro',
  templateUrl: './add-edit-pro.component.html',
  styleUrls: ['./add-edit-pro.component.css']
})
export class AddEditProComponent implements OnInit {

  fileInfo: String="";
  fileToUpload: any;
  imageUrl: any;

  constructor(private service:SharedService, private http: HttpClient, @Inject(MAT_DIALOG_DATA) public data: any) { }
  

  projectList:any=[];
  proj:any=0;
  projectID:any;

  @Input() pro:any;
  Id:number=0;
  Name:string="";
  From_date:any;
  To_date:any;
  Desc:string="";
  fileInput:any;
  fileAttr = 'Choose File';
  dataimage:any;
  uploadSuccess:boolean=false;
  SubsiteName:string="";
  SubsiteDesc:string="";
  proFlag:any;

  Start_date:any;
  End_date:any;
  

  ngOnInit(): void {
    this.fillData();
  }

  // upload(event: any) {
  //   this.fileToUpload = event.target.files[0];

  //   let reader = new FileReader();
  //   reader.onload = (event: any) => {
  //     this.fileInfo = this.fileToUpload.name;
  //     this._handleReaderLoaded(event);
  //   }
    
  //   reader.readAsDataURL(this.fileToUpload);
    
  // }

  upload(event:any) {
    this.fileToUpload = event.target.files[0];
    this.fileInfo = this.fileToUpload.name;
    var reader = new FileReader();
    reader.onload = this._handleReaderLoaded.bind(this);
    this.imageUrl = reader.readAsBinaryString(this.fileToUpload);
}

  _handleReaderLoaded(event:any) {
    var binaryString = event.target.result;
    this.imageUrl= btoa(binaryString);    
   }

  addPro(val:any){
    var new_site={
    Name : val.SubsiteName,	
    Desc : val.SubsiteDesc,
    LS_pre : parseFloat(val.pro.LSvalue1),
    C_pre : parseFloat(val.pro.Cvalue1),
    P_pre : parseFloat(val.pro.Pvalue1),
    R_pre : parseFloat(val.pro.Rvalue1),
    K_pre : parseFloat(val.pro.Kvalue1),
    LS_post : parseFloat(val.pro.LSvalue2),
    C_post : parseFloat(val.pro.Cvalue2),
    P_post : parseFloat(val.pro.Pvalue2),
    R_post : parseFloat(val.pro.Rvalue2),
    K_post : parseFloat(val.pro.Kvalue2),
    PreSoilLoss : parseFloat(val.pro.calVal1),
    PostSoilLoss : parseFloat(val.pro.calVal2),
    From_date : new Date(val.Start_date),
    To_date : new Date(val.End_date),
    ProjectImage: this.imageUrl,
    ProjectId : this.projectID
    }

    if(this.projectID){
      this.service.addSubsiteval(new_site).subscribe(res=>{
        alert(res.toString());
        this.projectID = null;
        window.location.reload();
      })
    }
​   
    else{
      delete new_site.ProjectId;
      var new_pro = 
      { 
        "ProjectName" : val.Name,
        "ProjectDesc": val.Desc,
        "PreSoilLoss": 0,
        "PostSoilLoss": 0,
        "subsites": new_site
        
    }
      this.service.addProval(new_pro).subscribe(res=>{
        alert(res.toString());
        this.projectID = null;
        window.location.reload();
      })
    }
  }

  fillData(){
    this.projectList = this.pro.proList
  }

  public mask = {
    guide: true,
    showMask: true,
    mask: [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]
  };

  projSelect(proj:any){
    if(proj==0){
      this.proFlag = false;
      this.Name = "";
      this.Desc = "";
      return 
    }
    this.projectID = proj.Id;
    this.proFlag = true;
    this.Name = proj.ProjectName;
    this.Desc = proj.ProjectDesc;
  }


}


