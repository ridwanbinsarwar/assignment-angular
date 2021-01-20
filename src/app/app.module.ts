import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';

import { HttpClientModule } from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { DataService } from './core/services/data.service';
// import { HttpClientUserService } from '@app/core/';
import { HttpClientUserService } from "./core/services/http-client-user.service";
import { UserTransferService } from './core/services/user-transfer.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      DataService, { dataEncapsulation: false }
    ),
    CoreModule,
    SharedModule,
    
  ],
  providers: [HttpClientUserService, UserTransferService],
  bootstrap: [AppComponent]
})
export class AppModule { }
