import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AddUserService {

  springBootApi : string = ""
  constructor( private http: HttpClient) {
    this.springBootApi = environment.springBootApi
   }

  addFormData(obj:any){
    console.log(obj);
    
     return this.http.post(this.springBootApi + 'allUser/addNew', obj)
  }
}
