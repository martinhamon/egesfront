import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


  export class HttpinterceptorServiceService implements HttpInterceptor {
  
    constructor() { }
  
    intercept(req: HttpRequest<any>, next: HttpHandler) : Observable<HttpEvent<any>> {
      const token: string  = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJtaGFtb24iOmZhbHNlLCJuYmYiOjE3MDMxMDIxMTUsInJvbGVzIjpbIlJPTEVfQURNSU4iXSwiaXNzIjoiaXNzIiwiZXhwIjoxNzM0NzI4MTE1LCJpYXQiOjE3MDMxMDIxMTV9.UGgyl-N9RZyScHtZl5yZ_zxwmXnxEdewM41nN0dwMjA"
      let request = req;
     // console.log(token);
      request = req.clone({
        setHeaders: {
          //Autorizaciòn de tipo Bearer + token
          
          Authorization: `Bearer ${ token }`
        }
      });
      
  
      return next.handle(request);
  
    }
  
  }
  
