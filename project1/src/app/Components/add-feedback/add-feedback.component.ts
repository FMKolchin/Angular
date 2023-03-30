import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import {  Router } from '@angular/router';
import { Feedback } from 'src/app/Classes/feedback/feedback';
import { Satisfied } from 'src/app/Classes/Satisfied/satisfied';
import { HttpService } from 'src/app/Services/http.service';
import { SubjectService } from 'src/app/Services/subject.service';

@Component({
  selector: 'app-add-feedback',
  templateUrl: './add-feedback.component.html',
  styleUrls: ['./add-feedback.component.scss']
})
export class AddFeedbackComponent implements OnInit {
  id: number = 100;
  form = new FormGroup({
    name: new FormControl('',Validators.required),
    email: new FormControl('', Validators.required),
    comment: new FormControl('', [Validators.required,Validators.minLength(5)]),
    phone: new FormControl('', [Validators.required,Validators.minLength(9),Validators.maxLength(10)])
  });
  feedback: Feedback = new Feedback;
  onSubmit() {
    this.feedback.id = this.id++;
    this.feedback.content = this.form.value.comment != null ? this.form.value.comment : "error";
    this.feedback.name = this.form.value.name != null ? this.form.value.name : "error";
    this.feedback.likes = 0;
    this.feedback.satisfied = Satisfied.s1;
    console.log("before")
    console.log(this.feedback)
    this.http.saveFeedback(this.feedback).subscribe();
    console.log("after")
    this.subject.setGiftCardSubject("A gift card is sent to your email at these moments");
    alert("thank you for sending feedback, we hope to see you soon!");
    this.router.navigate(['/feedbacks']);

  }
  constructor(public http: HttpService,public router: Router,public subject:SubjectService) { }

  ngOnInit(): void { }

}
