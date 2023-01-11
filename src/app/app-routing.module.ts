import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CareersComponent } from './website/careers/careers.component';
import { CompanyComponent } from './website/company/company.component';
import { ContactUsComponent } from './website/contact-us/contact-us.component';
import { HomeComponent } from './website/home/home.component';
import { OurWorkComponent } from './website/our-work/our-work.component';
import { ServiceComponent } from './website/service/service.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'careers', component: CareersComponent },
  { path: 'company', component: CompanyComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'our-word', component: OurWorkComponent },
  { path: 'services', component: ServiceComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
