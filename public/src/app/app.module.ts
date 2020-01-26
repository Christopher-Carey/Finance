import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApiService } from './api.service';
import { RightdataComponent } from './rightdata/rightdata.component';
import { LeftdataComponent } from './leftdata/leftdata.component';
import { NewtransComponent } from './newtrans/newtrans.component';

@NgModule({
  declarations: [
    AppComponent,
    RightdataComponent,
    LeftdataComponent,
    NewtransComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    ApiService,
    LeftdataComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
