import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';
import 'rxjs/Rx';
import { map } from "rxjs/operators";
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private username : string;
  private clientid = 'f71d7ef9373a37375758';
  private clientsecret = 'd5f775c8e361b9c9d0251b017ec11b6c61c3e6bf';

  constructor(private http:Http) {
    console.log("service is ready");
    this.username = 'nayanika';

   }
   getProfileInfo(){
     return this.http.get("https://api.github.com/users/" + this.username + "?client_id="+this.clientid + "&client_secret=" + this.clientsecret)
     .pipe(map((response: any) => response.json()));
   }
   getProfileRepos(){
    return this.http.get("https://api.github.com/users/" + this.username + "/repos?client_id="+this.clientid + "&client_secret=" + this.clientsecret)
    .pipe(map((response: any) => response.json()));
  }

  updateProfile(username:string){
    this.username = username;

  }
}
