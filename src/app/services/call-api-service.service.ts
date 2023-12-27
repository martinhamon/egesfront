import { Injectable } from '@angular/core';
import { GetStudiesRequest } from '../request/get-studies-request';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})


export class CallApiServiceService {

  
  apiUrl = 'http://localhost:8444/rest/';


   study :GetStudiesRequest | undefined ;
  constructor(private http: HttpClient) { }


  
  getLinks(dni : string, an : string ) {
    const headers = new HttpHeaders()
    .append(
      'Content-Type',
      'application/json'
    );

    this.study= new GetStudiesRequest (dni,an); 
    
    const body=JSON.stringify(this.study);
    
   return this.http
      .post<any>(this.apiUrl+"report/study_token", body);
  
  }

  getQrCode(dni : string, an : string ) {
    const headers = new HttpHeaders()
    .append(
      'Content-Type',
      'application/json'
    );
    let options = { headers: headers };
    this.study= new GetStudiesRequest (dni,an); 
    
    const body=JSON.stringify(this.study);
    
   return this.http
      .post<any>("http://localhost:8444/rest/qr/generate", body,options);
  
  }


  proccessQr(data: string ) {
    const headers = new HttpHeaders()
    .append(
      'Content-Type',
      'application/json'
    );
    //let options = { headers: headers };
    
    
    //const body=JSON.stringify(this.study);
    
   return this.http
      .get<any>("http://localhost:8444/rest/qr/processqr?data="+data);
  
  }

  
}
