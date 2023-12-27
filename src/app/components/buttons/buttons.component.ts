import { Component, Input } from '@angular/core';
import { studyTokensResponse } from '../../response/token-studies-response';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrl: './buttons.component.css'
})
export class ButtonsComponent {
  @Input() tokensChild: studyTokensResponse | undefined;

  ngAfterViewInit() {
    console.log("Respuesta: "+this.tokensChild?.report);

    
  }
}
