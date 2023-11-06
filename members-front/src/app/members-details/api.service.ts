import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl = 'http://localhost:8000';
  httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) { }

  getMember(id: any): Observable<any> {
    return this.http.get(this.baseUrl + '/members/' + id + '/',
    {headers: this.httpHeaders});
  };

  updateMember(member: any): Observable<any> {
    const body = { name: member.name, email: member.email, phone: member.phone, address: member.address, city: member.city, profile: member.profile_image, zipcode: member.zipcode, state: member.state, created: member.created, updated: member.updated};
    return this.http.put(this.baseUrl + '/members/' + member.id + '/', body,
    {headers: this.httpHeaders});
  };
}
