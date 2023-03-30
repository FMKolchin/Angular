import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Feedback} from '../Classes/feedback/feedback'
import { environment } from 'src/environments/environment';
import { Service } from '../Classes/Service/service';
@Injectable({
  providedIn: 'root'
})
export class HttpService {
  env = "https://localhost:44300/api";

  constructor(private http: HttpClient) {
   }
  getFeedbacks():Observable<Feedback[]>{
    return this.http.get<Feedback[]>(this.env+"/feedback")
  }
  getServices():Observable<Service[]>{
    return this.http.get<Service[]>(this.env+"/service")
  }
  saveFeedback(feedback:Feedback):Observable<Feedback[]>{
    console.log("Saving feedback",feedback);
    return this.http.post<Feedback[]>(this.env+"/feedback",feedback);
  }
  updateLikes(id:number,likes:number):Observable<Feedback[]>{
    return this.http.put<Feedback[]>(this.env+"/feedback/"+id,likes);
  }
  getService(id:number):Observable<Service>{
    return this.http.get<Service>(this.env+"/service/"+id)
  }
}


