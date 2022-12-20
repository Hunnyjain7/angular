import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { AddContactComponent } from './add-contact/add-contact.component';
import { AccessRoutingModule } from './access/access-routing.module';
import { StatusComponent } from './status/status.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    AddContactComponent,
    // StatusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
    // AccessRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
