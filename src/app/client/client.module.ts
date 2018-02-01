import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeSectionClientComponent } from './home-section-client/home-section-client.component';
import { ClientComponent } from './client.component';
import { PostagenClientComponent } from './postagen-client/postagen-client.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeClientComponent } from './home-client/home-client.component';
import { HomeAboutComponent } from './home-about/home-about.component';
import { ContactComponent } from './contact/contact.component';
import { PageContactComponent } from './page-contact/page-contact.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

import { appRoutes } from './routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  declarations: [
    HomeSectionClientComponent,
    ClientComponent,
    PostagenClientComponent,
    HomeClientComponent,
    HomeAboutComponent,
    ContactComponent,
    PageContactComponent,
    PortfolioComponent
  ],
  exports: [
    HomeSectionClientComponent,
    ClientComponent
  ]
})
export class ClientModule { }
