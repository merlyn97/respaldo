import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  public url: string;

  constructor(private _http: HttpClient) {
    this.url= "http://ec2-54-164-16-250.compute-1.amazonaws.com:9000/cleverbeat-report/hhjvlnlkkhvhgdyj6xy";
  
   }

   getPrueba(){
      return 'Hola mundo desde el serrvicio';
   }

   getArticulos():Observable<any>{
     return this._http.get<any>(this.url);
   }
}
