import { Component } from '@angular/core';
import { UserMasterService } from '../Service/user-master.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  displayedColumns: string[] = ['position', 'email', 'mobile_no', 'is_active', 'display_name', 'created_on', 'user_type_term', 'action'];
  // dataSource = ELEMENT_DATA;

  constructor(private service: UserMasterService) { }
  userDetails: any;
  dataSource: any;

  ngOnInit(): void {
    this.GetAllUsers();
  }

  GetAllUsers() {
    this.service.GetAllUsers().subscribe(item => {
      this.userDetails = item;
      this.dataSource = this.userDetails.data;
      console.log(this.userDetails);
      if (this.dataSource) {

      }
      
    })
  }
}
