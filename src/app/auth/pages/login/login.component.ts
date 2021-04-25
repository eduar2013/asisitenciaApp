import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import Swal from 'sweetalert2';

import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'] 
})
export class LoginComponent {

  loginForm: FormGroup = this.fb.group({
    username:['',[Validators.required]],
    password:['',[Validators.required]]
  });

  constructor(private fb:FormBuilder,
              private authService:AuthService,
              private router: Router) { }

  login(){
    const {username, password} = this.loginForm.value;
    console.log(username);
    if(username.trim() === '' || password.trim() === ''){
      Swal.fire(
        {
          icon:"error",
          title:"Error",
          text:"Debe ingresar el usuario y la contraseña",
          confirmButtonColor:"#5FB7E9"
        }
      )  
    }else{

      this.authService.login(username,password)
        .subscribe(ok=> {

          if(ok === true){
            this.router.navigateByUrl('/dashboard')
          }else{
            Swal.fire(
              {
                icon:"error",
                title:"Error",
                text:ok,
                confirmButtonColor:"#5FB7E9"
              }
            )        
          }
        })
      }

  }

}
