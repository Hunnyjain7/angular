import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent {

  constructor(private route: ActivatedRoute) { }
  
  ngOnInit(): void {
    const routeid = this.route.snapshot.paramMap.get('id')
    console.log(routeid);
    
  }

}
