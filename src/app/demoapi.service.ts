import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DemoapiService {
  constructor(private http:HttpClient) {}
  getapi()
  {
    return this.http.get(`http://universities.hipolabs.com/search?country=United+States`);
  }
   
}
