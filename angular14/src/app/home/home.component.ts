import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  content = 'Tutorial';
  salary = 40000;
  isdisabled = false;
  colors = ['green', 'yellow', 'black']
  ngOnInit() {
  
  }

  onClick(name:any) {
    alert(name);
  }

}
