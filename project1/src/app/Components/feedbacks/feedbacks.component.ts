import { Component, OnInit } from '@angular/core';
import { Feedback } from 'src/app/Classes/feedback/feedback';
import { HttpService } from 'src/app/Services/http.service';

@Component({
  selector: 'app-feedbacks',
  templateUrl: './feedbacks.component.html',
  styleUrls: ['./feedbacks.component.scss']
})
export class FeedbacksComponent implements OnInit {
  feedbacks:Array<Feedback>=[]

  constructor(public http:HttpService) { }

  ngOnInit(): void {
    console.log('before data');
    this.http.getFeedbacks().subscribe((data)=>{this.feedbacks = data;console.log(data)},(error)=>{console.log("error:"+ error)});
    console.log('after data');
  }

}
