import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SquareBoxComponent } from './square-box/square-box/square-box.component';
import { SquareBoxContainerComponent } from './square-box/square-box-container/square-box-container.component';

@NgModule({
  declarations: [
    AppComponent,
    SquareBoxComponent,
    SquareBoxContainerComponent
   ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
