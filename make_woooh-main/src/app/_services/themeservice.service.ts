import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeserviceService {
  apiURL = 'http://localhost:3030/api/project/';
  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  } 

  createTheme(projectname,themeVal): Observable<any> {
    return this.http.post(this.apiURL + 'themeconfig', {
      projectname: projectname,
      themeVal: themeVal,
    }, this.httpOptions);
  }}
