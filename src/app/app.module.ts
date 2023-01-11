import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './website/home/home.component';
import { ServiceComponent } from './website/service/service.component';
import { CompanyComponent } from './website/company/company.component';
import { OurWorkComponent } from './website/our-work/our-work.component';
import { CareersComponent } from './website/careers/careers.component';
import { ContactUsComponent } from './website/contact-us/contact-us.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ServiceComponent,
    CompanyComponent,
    OurWorkComponent,
    CareersComponent,
    ContactUsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
