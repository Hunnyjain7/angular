import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserModel } from '../Model/UserModel';

@Injectable({
  providedIn: 'root'
})
export class UserMasterService {

  constructor(private http: HttpClient) { }
  apiurl = 'http://localhost:8000/admin/get-users';

  GetAllUsers():Observable<UserModel[]> {
    return this.http.get<UserModel[]>(this.apiurl);
  }

  GetUserById(user_id: any) {
    return this.http.get(this.apiurl + '/' + user_id);
  }

  // DeleteUserById(user_id: any) {
  //   return this.http.get(this.apiurl + '/' + user_id);
  // }


}
