import { Component, Input, OnInit } from '@angular/core';
import { faExternalLinkSquare } from '@fortawesome/free-solid-svg-icons';
import { Feedback } from 'src/app/Classes/feedback/feedback';
import { HttpService } from 'src/app/Services/http.service';


@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {

  @Input()
  feedback: Feedback = new Feedback;
  constructor(public http: HttpService) { }

  ngOnInit(): void { }
  likes():void{
    this.feedback.likes++;
    this.http.updateLikes(this.feedback.id,this.feedback.likes).subscribe();
  }
}


