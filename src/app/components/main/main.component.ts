import { Component, EventEmitter, Output } from '@angular/core';
import { CallApiServiceService } from '../../services/call-api-service.service';
import { HttpHeaders } from '@angular/common/http';
import { GetStudiesRequest } from '../../request/get-studies-request';
import { studyTokensResponse } from '../../response/token-studies-response';
import { Router } from '@angular/router';



@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
  template: `
    <child-component [tokensChild]=this.tokens></child-component>
  `,
})
export class MainComponent {
  study :GetStudiesRequest | undefined ;
  tokens:  studyTokensResponse  |  undefined;
  
  showButtons : boolean = false; 
  reportUrl : string | undefined;
  imageUrl: string | undefined
  data: string =""
  urlTree: any;
  constructor(private callService: CallApiServiceService,private router: Router){}
  patientid : string ="";

  studyid : string ="";


  ngOnInit(){
    console.log("DNI: : "+this.patientid);

    this.urlTree = this.router.parseUrl(this.router.url);

   this.data = this.urlTree.queryParams['data'];
   let array  = (atob(this.data)).split(":")
   this.patientid = array[0]
   this.studyid = array[1]
   console.log("Data: "+this.patientid);
    this.callService.proccessQr(this.data)
    .subscribe(urls => {
     this.tokens =urls;
      console.log("Respuesta: "+this.tokens);
      //this.reportUrl=this.tokens?.report.replace('[','').replace(']','');;
      this.reportUrl=this.tokens?.report
      this.imageUrl=this.tokens?.imageUrl
      this.showButtons = true;
      
    })

  }
  
  onCall(event: any) 
  {
    
    this.callService.getLinks("27196560","01200100025104")
    .subscribe(data => {
     this.tokens =data;
      //console.log("Respuesta: "+this.tokens?.reporturl);
      this.reportUrl=this.tokens?.report.replace('[','').replace(']','');;
      this.imageUrl=this.tokens?.imageUrl
      this.showButtons = true;
      
    })


  }
}