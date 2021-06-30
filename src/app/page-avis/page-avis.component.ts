import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { FreelancerService } from '../common/freelancer.service';


@Component({
  selector: 'app-page-avis',
  templateUrl: './page-avis.component.html',
  styleUrls: ['./page-avis.component.css']
})
export class PageAvisComponent implements OnInit {

  constructor(private service: FreelancerService, private formB: FormBuilder) { }

  public form: FormGroup;
  public tabFreelance: any[] = [];
  public tabEmailFreelance: any[] = [];
  ngOnInit(): void {
    this.initialForm();
    this.resultat();
  }


  public resultat() {
    let resultat: Observable<any> = this.service.getFreelancer();
    resultat.subscribe((rep) => {
      this.tabFreelance = rep;
      this.mail();
    })
  }

  public text: string = "";
  public soumettre() {
    console.log(this.tabEmailFreelance);
    this.text = this.form.get("text").value;
    for (let i = 0; i < this.tabFreelance.length; i++) {
      this.service.sendMail(this.text, this.tabEmailFreelance[i])
      console.log(this.tabEmailFreelance[i])
      console.log("envoyer");
    }
  }

  public mail() {
    this.tabFreelance.forEach(element => {
      console.log(element.mail)
      this.tabEmailFreelance.push(element.mail);
    });
    console.log(this.tabEmailFreelance);

  }


  public initialForm() {
    this.form = this.formB.group({
      text: [" ", [Validators.required, Validators.minLength(5)]],

    });

  }
}
