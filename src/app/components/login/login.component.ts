import { Component, OnInit } from '@angular/core';
import { Login } from '../../interfaces/login'
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login: Login = {
    email: null,
    password: null,
  };
  constructor(private loginService: LoginService) {}
  
  ngOnInit() {
  }
  
  iniLogin() {
    console.log(this.login);
      this.loginService.onSave(this.login).subscribe((data) => {
        console.log(data);
        let key = 'Autorization';
        let result = data['token_type']+' '+data['access_token'];
        localStorage.setItem(key, result);
      }, (error) => {
        console.log(error);
      });
  }

}
