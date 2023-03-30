import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Service } from 'src/app/Classes/Service/service';
import { HttpService } from 'src/app/Services/http.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  services: Array<Service> = [];
  url = "../../../assets/images/";
  moreDetailsId?: number = 0;
  // moreDetailsOpen:Array<boolean> = [];
  moreDetailsIdFunc(id: Service): void {
    // if(id.id!=null){
    //   this.moreDetailsOpen[id.id] = true;
    // }
    this.moreDetailsId = id.id;
    this.route.navigate(["/services/more_bit_ditails/" + id.id])
  }
  constructor(public http: HttpService, public route: Router) { }

  ngOnInit(): void {
    console.log('before data');
    this.http.getServices().subscribe((data) => { this.services = data; console.log(data) }, (error) => { console.log("error:" + error) });
    console.log('after data');
  }

}
