import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BrowserModule } from '@angular/platform-browser';
import { MainComponent } from './components/main/main.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { GenerateqrComponent } from './components/generateqr/generateqr.component';

const routes: Routes = [ { path: '',  component: MainComponent, pathMatch: 'full'  },
{ path: 'view',  component: ButtonsComponent, pathMatch: 'full' },
{ path: 'generateqr',  component: GenerateqrComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
