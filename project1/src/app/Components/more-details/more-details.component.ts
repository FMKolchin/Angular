import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Service } from 'src/app/Classes/Service/service';
import { HttpService } from 'src/app/Services/http.service';

@Component({
  selector: 'app-more-details',
  templateUrl: './more-details.component.html',
  styleUrls: ['./more-details.component.scss']
})
export class MoreDetailsComponent implements OnInit {
  @Input()
  service: Service = new Service;
  constructor(private route: ActivatedRoute,public http:HttpService) { }

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
