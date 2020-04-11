import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule, HttpClient } from '@angular/common/http';


import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material/material.module';
import { CommandComponent } from './command/command.component';
import { FicherLogComponent } from './ficher-log/ficher-log.component';

@NgModule({
  declarations: [
    AppComponent,
    CommandComponent,
    FicherLogComponent
  ],
  imports: [HttpClientModule,
    BrowserModule, FormsModule, BrowserAnimationsModule, AppRoutingModule, MaterialModule
  ],
  providers: [HttpClientModule, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
