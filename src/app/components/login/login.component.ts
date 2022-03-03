import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup ({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor( private authService: AuthService,
               private router: Router ) { }

  ngOnInit(): void {
  }

  async onLogin() {
    // console.log('Form --> ', this.loginForm.value);
    const { email, password } = this.loginForm.value;
    try {
      const user = await this.authService.login(email, password);
      // console.log('USER ha devuelto -->', user);
      if (!user.user) {
        Swal.fire({
          title: user.code,
          text: user.message,
          icon: 'error',
          confirmButtonText: 'Ok'
        })
      } else {
        if (user) {
          // Redirect to Home Page
          this.router.navigate(['/home']);
        }
      }
    } catch (error) {
      console.log(error);
    }
  }

}
