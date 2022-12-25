import { Component, DoCheck } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck {
  
  constructor(private route: Router) {  }
  title = 'angular14';
  isMenuVisible = true;
  ngDoCheck(): void {
    const currentroute = this.route.url;
    console.log(currentroute);
    
    if (currentroute == '/login' || currentroute == '/access/register') {
      this.isMenuVisible = false;
    } else {
      console.log("here");
      
      this.isMenuVisible = true;
    }
    
  }
}
