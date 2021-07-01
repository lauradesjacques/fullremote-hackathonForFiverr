import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { FreelancerService } from '../common/freelancer.service';


@Component({
  selector: 'app-page-avis',
  templateUrl: './page-avis.component.html',
  styleUrls: ['./page-avis.component.css']
})
export class PageAvisComponent implements OnInit {

  constructor(private service: FreelancerService, private formB: FormBuilder, private router : Router) { }

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
  public contenueMessage :string ="Bonjour, \n Vous avez une nouvelle demande d’avis de la part d'adel  \r CLIQUER SUR LE LIENS ";
  public soumettre() {
    console.log(this.tabEmailFreelance);
    this.text = this.form.get("text").value;
    this.service.recupeMessage(this.text)
    for (let i = 0; i < this.tabFreelance.length; i++) {
      this.service.sendMail(this.contenueMessage, this.tabEmailFreelance[i])
      console.log(this.tabEmailFreelance[i])
      console.log("envoyer");
    }
    this.router.navigate(["/page-reponse"])
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
      text: ["j'ai besoin d'aide sur l'un de mes projets sur les appels API ", [Validators.required, Validators.minLength(5)]],

    });

  }
}
