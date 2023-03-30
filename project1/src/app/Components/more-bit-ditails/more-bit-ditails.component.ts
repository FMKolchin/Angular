import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Service } from 'src/app/Classes/Service/service';
import { HttpService } from 'src/app/Services/http.service';

@Component({
  selector: 'app-more-bit-ditails',
  templateUrl: './more-bit-ditails.component.html',
  styleUrls: ['./more-bit-ditails.component.scss']
})
export class MoreBitDitailsComponent implements OnInit {
  service: Service = new Service;
  constructor(public route:ActivatedRoute,public http: HttpService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      let serviceId = params.get('service');
      let id =Number(serviceId);
      console.log(serviceId);
      this.http.getService(id).subscribe((data) => {
        this.service = data;
        console.log(data);
      })


    })
  }

}
