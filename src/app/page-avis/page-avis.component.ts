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

  ngOnInit(): void {
    this.resultat();
    this.initialForm();
  }
  public form: FormGroup;
  public res: any[] = [];
  public resultat() {

    let resultat:Observable<any> =this.service.getFreelancer();
    resultat.subscribe((rep)=>{
      this.res.push(rep);
      console.log(this.res);
    })
  }
public text: string = "";
public soumettre(){
this.text = this.form.get("text").value;
this.service.sendMail(this.text, "mohamedboussaid69700@hotmail.fr");
}
public initialForm(){
  this.form=this.formB.group({
    text:[" ",[Validators.required,Validators.minLength(5)]]
  });

}
}
