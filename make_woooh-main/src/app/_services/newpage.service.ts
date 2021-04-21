import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewpageService {
  apiURL = 'http://localhost:3030/api/project/';
  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  } 

  createNewPage(projectname,pagename): Observable<any> {
    return this.http.post(this.apiURL + 'createNewPage', {
      projectname: projectname,
      pagename: pagename,
    }, this.httpOptions);
  }}
