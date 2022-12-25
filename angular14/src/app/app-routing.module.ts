import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AddContactComponent } from './add-contact/add-contact.component';
import { ContactComponent } from './contact/contact.component';
import { AuthGuard } from './Gaurd/auth.guard';
import { HomeComponent } from './home/home.component';
import { StatusComponent } from './status/status.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {path:'home', component:HomeComponent, canActivate: [AuthGuard]},
  {path:'about', component:AboutComponent, canActivate: [AuthGuard]},
  {path:'user', component:UserComponent, canActivate: [AuthGuard]},
  {
    path: 'contact', component: ContactComponent , canActivate: [AuthGuard], children: [
      {path: 'add', component: AddContactComponent},
      {path: 'edit/:id', component: AddContactComponent},
    ]
  },
  // lazy loading
  {path: 'access', loadChildren:()=>import('./access/access.module').then(opt=>opt.AccessModule)},
  {path: 'login', loadComponent:()=>import('./login/login.component').then(opt=>opt.LoginComponent)},
  {path: '**', component: StatusComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
