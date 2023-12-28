import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HttpinterceptorServiceService } from './services/httpinterceptor-service.service';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { GenerateqrComponent } from './components/generateqr/generateqr.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatIconModule} from '@angular/material/icon';
@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ButtonsComponent,
    GenerateqrComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatDividerModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatIconModule
  
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpinterceptorServiceService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
