import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
readonly APIUrl = "http://127.0.0.1:8000";
readonly PhotoUrl = "http://127.0.0.1:8000/media/";

  constructor(private http:HttpClient) { }

  getLSlist():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + '/lsfactor/')
  }

  addLSval(val:any){
    return this.http.post(this.APIUrl + '/lsfactor/',val)
  }

  updateLSval(val:any){
    return this.http.put(this.APIUrl + '/lsfactor/',val)
   
  }

  deleteLSval(val:any){
    return this.http.put(this.APIUrl + '/lsfactor/',val)
  }

  getClist():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + '/cfactor/')
  }

  addCval(val:any){
    return this.http.post(this.APIUrl + '/cfactor/',val)
  }

  updateCval(val:any){
    return this.http.put(this.APIUrl + '/cfactor/',val)
  }

  deleteCval(val:any){
    return this.http.put(this.APIUrl + '/cfactor/',val)
  }

  getPlist():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + '/pfactor/')
  }

  addPval(val:any){
    return this.http.post(this.APIUrl + '/pfactor/',val)
  }

  updatePval(val:any){
    return this.http.put(this.APIUrl + '/pfactor/',val)
  }

  deletePval(val:any){
    return this.http.put(this.APIUrl + '/pfactor/',val)
  }

  getLSNewlist():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + '/lsfactornew/')
  }

  getProlist():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + '/projects/')
  }

  addProval(val:any){
    return this.http.post(this.APIUrl + '/projects/',val)
  }

  updateProval(val:any){
    return this.http.put(this.APIUrl + '/projects/',val)
  }

  deleteProval(val:any){
    return this.http.delete(this.APIUrl + '/projects/',val)
  }

  getSubsitelist():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + '/subsites/')
  }

  addSubsiteval(val:any){
    return this.http.post(this.APIUrl + '/subsites/',val)
  }

  updateSubsiteval(val:any){
    return this.http.put(this.APIUrl + '/subsites/',val)
  }

  deleteSubsiteval(val:any){
    return this.http.put(this.APIUrl + '/subsites/',val)
  }

  UploadPhoto(val:any){
    return this.http.post(this.APIUrl+'/SaveFile',val)
  }
}
