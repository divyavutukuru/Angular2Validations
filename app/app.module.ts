import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { UserComponent } from './user.component';
import { User } from './user';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {AppPortfolio} from './portfolio.component';
import { AppRoutes } from './app.routing';

@NgModule ({
   imports: [ BrowserModule,FormsModule,ReactiveFormsModule,RouterModule.forRoot(AppRoutes)],
   declarations: [ AppComponent,AppPortfolio,UserComponent],
   bootstrap: [ AppComponent ]
})
export class AppModule { }