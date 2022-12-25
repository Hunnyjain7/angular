import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Service/user.service';
import * as alertify from 'alertifyjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  constructor(private route: Router, private service: UserService) {}

  res: any;

  RedirectLogin() {
    this.route.navigate(['login']);
  }

  reactiveform = new FormGroup({
    email: new FormControl(
      '',
      Validators.compose([Validators.required, Validators.email])
    ),
    user_name: new FormControl('', Validators.required),
    contact: new FormControl(
      '',
      Validators.compose([
        Validators.required,
        Validators.minLength(7),
        Validators.maxLength(13),
        Validators.pattern('^[0-9]*$'),
      ])
    ),
    password: new FormControl('', Validators.compose([Validators.required])),
  });

  SaveUser() {
    if (this.reactiveform.valid) {
      this.service.Registration(this.reactiveform.value).subscribe((item) => {
        this.res = item;
        if (this.res.status === 200) {
          alertify.success("Registration Successfull")
          this.route.navigate(['login'])
          console.log(this.res);
        } else {
          alertify.error(this.res.message)
        }
      });
    }
  }
}
