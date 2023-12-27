import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';
import { CallApiServiceService } from '../../services/call-api-service.service';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-generateqr',
  templateUrl: './generateqr.component.html',
  styleUrl: './generateqr.component.css',
})
export class GenerateqrComponent {
  public imageQr : any;   
  private readonly imageType : string = 'data:image/PNG;base64,'; 
  private sanitizer: DomSanitizer | undefined; 

  constructor(private callService: CallApiServiceService,private router: Router){}
  onSubmit(f: NgForm) {
   
   // console.log("res"+f.value.dni);  // { first: '', last: '' }
    this.callService.getQrCode(f.value.dni,f.value.protocolo)   
          .subscribe((data  ) => {   
           console.log(this.imageType + data.content);
        this.imageQr = this.sanitizer?.bypassSecurityTrustUrl(this.imageType + data.content);  
        this.imageQr =this.imageType + data.content
      })
      }

     
}
