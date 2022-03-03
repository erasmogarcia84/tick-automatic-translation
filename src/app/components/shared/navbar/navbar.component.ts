import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public isLogged: boolean = false;

  constructor( private authService:AuthService ) { }

  async ngOnInit() {
    const user = await this.authService.getCurrentUser();
    if (user) {
      // console.log('User -->', user);
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  onLogout(): void {
    this.authService.logout();
  }

}
