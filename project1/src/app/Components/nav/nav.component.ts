import { Component, OnInit } from '@angular/core';
import { SubjectService } from 'src/app/Services/subject.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  value: string="";
  
  constructor(public subject:SubjectService) { }

  ngOnInit(): void {
    this.subject.giftCardSubject$.subscribe((value:string) => {this.value = value;})
  }

}
