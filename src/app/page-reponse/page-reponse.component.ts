import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FreelancerService } from '../common/freelancer.service';

@Component({
  selector: 'app-page-reponse',
  templateUrl: './page-reponse.component.html',
  styleUrls: ['./page-reponse.component.css']
})
export class PageReponseComponent implements OnInit {
  public text: string = "";

  constructor(private service: FreelancerService, private formB: FormBuilder) { }
  public message: string = "";
  public form: FormGroup;
  ngOnInit(): void {
    this.initialForm();
    this.message = this.service.returnMessage();

  }
  public initialForm() {
    this.form = this.formB.group({
      text: [" ", [Validators.required, Validators.minLength(5)]],
    });
  }

  public aLaSoumission() {
    this.text = this.form.get("text").value;
    this.service.sendMail(this.text, "adel6994700@gmail.com")
  }
}
