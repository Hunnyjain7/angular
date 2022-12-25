import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { 
    
  }

  ProceedLogin(inputData: any) {
    return this.http.post('http://localhost:8000/admin/login', inputData);
  }

  isLoggedIn() {
    return localStorage.getItem('token') != null;
  }

  getToken() {
    return localStorage.getItem('token') != null ? localStorage.getItem('token') : '';
  }

  Registration(inputData: any) {
    return this.http.post('http://localhost:8000/admin/register', inputData);
  }
}
