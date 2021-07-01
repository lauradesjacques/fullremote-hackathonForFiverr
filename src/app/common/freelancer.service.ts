import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FreelancerService {
  public urlApi: string = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  public getFreelancer(): Observable<any> {
    return this.http.get(this.urlApi + '/readall');
  }


  public sendMail(text: string, mail: string) {
    console.log("boulette");
    let result: Observable<any> = this.http.get(this.urlApi + '/email?text=' + text + '&mail=' + mail + '&sujet=Demandeavis')
    result.subscribe((reponse) => { });

  }
  public text :string =""

  public returnMessage():string {
    return this.text;
  }
  public recupeMessage(message :string ):string{
    return this.text = message;
  }
}


