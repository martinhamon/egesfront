import { Injectable } from '@angular/core';
import { GetStudiesRequest } from '../request/get-studies-request';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})


export class CallApiServiceService {

  
//apiUrl = 'http://192.168.10.100:8444/rest/';
apiUrl = 'http://200.80.235.243:8444/rest/';
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
      .post<any>(this.apiUrl+"qr/generate", body,options);
  
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
      .get<any>(this.apiUrl+"qr/processqr?data="+data);
  
  }

  
}
