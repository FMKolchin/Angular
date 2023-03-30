import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  send(){
    alert("your message was sent, a response will be sent as soon as possible")
  }
  constructor() { }

  ngOnInit(): void {
  }

}
