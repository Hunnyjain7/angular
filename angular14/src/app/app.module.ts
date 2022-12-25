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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { UserComponent } from './user/user.component';
import { MaterialModule } from 'src/Material-Module';
import { TokenInterceptorService } from './Service/token-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    AddContactComponent,
    UserComponent,
    // StatusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule
    // AccessRoutingModule
  ],
  providers: [{provide:HTTP_INTERCEPTORS, useClass:TokenInterceptorService, multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
