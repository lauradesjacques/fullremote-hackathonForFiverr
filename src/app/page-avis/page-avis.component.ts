import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FreelancerService } from '../common/freelancer.service';


@Component({
  selector: 'app-page-avis',
  templateUrl: './page-avis.component.html',
  styleUrls: ['./page-avis.component.css']
})
export class PageAvisComponent implements OnInit {

  constructor(private service: FreelancerService) { }

  ngOnInit(): void {
    this.resultat();
  }

  public res: any[] = [];
  public resultat() {

    let resultat:Observable<any> =this.service.getFreelancer();
    resultat.subscribe((rep)=>{
      this.res.push(rep);
      console.log(this.res);
    })
  }

}
