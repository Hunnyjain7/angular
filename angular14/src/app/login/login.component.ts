import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/Material-Module';
import { FormsModule } from '@angular/forms';
import { UserService } from '../Service/user.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, MaterialModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private service: UserService, private route:Router) { 
    localStorage.clear()
  }
  res: any;

  ProceedLogin(loginData: any) {
    if (loginData.valid) {
      this.service.ProceedLogin(loginData.value).subscribe((item) => {
        this.res = item;
        if (this.res.status === 200) {
          console.log(this.res);
          localStorage.setItem('token', this.res.data.token)
          localStorage.setItem('user_id', this.res.data.user_id)
          this.route.navigate(['home']);
        } else {
          console.log("invalid");
          
        }
      });
    }
  }

  RedirectRegister() {
    this.route.navigate(['access/register'])
  }
}
