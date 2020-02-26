import { BrowserModule } from '@angular/platform-browser'; import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module'; import { AppComponent } from './app.component'; import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; import { UsersComponent } from './users/users.component'; import { UserComponent } from './users/user/user.component'; import { MaterialModule } from './material/material.module'; import { UserService } from './services/user.service'; import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DataListComponent } from './data-list/data-list.component';

@NgModule({ declarations:
   [AppComponent,
     UsersComponent,
      UserComponent,
      DataListComponent], 
   imports: [
     BrowserModule, 
    AppRoutingModule,
     BrowserAnimationsModule, 
     MaterialModule, 
     ReactiveFormsModule,
     HttpClientModule
    ], 
   providers: [UserService],
    bootstrap: [AppComponent] })
export class AppModule { }

