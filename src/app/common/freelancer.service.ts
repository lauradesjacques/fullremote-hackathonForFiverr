import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FreelancerService {
  public urlApi: string = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  public getFreelancer(): Observable<any> {
    return this.http.get(this.urlApi + '/read?freelanceId=1');
  }
}
