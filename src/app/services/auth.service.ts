import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { User } from 'firebase';
import { first } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public user: User;
  public errorLogin: boolean = false;

  constructor( public afAuth: AngularFireAuth,
               private router: Router ) { }

  async login( email: string, password: string ) {
    try{
      const result = await this.afAuth.signInWithEmailAndPassword(
        email,
        password
      );
      console.log('LOGIN -->', result);
      return result;
    } catch (error) {
      console.log('ERROR -->', error);
      return error;
    }
   }

  async logout() {
    try {
      await this.afAuth.signOut();
      this.router.navigate(['/login']);
    } catch(error) {
      console.log(error);
    }
    // TO DO -> Eliminar datos del usuario del Storage
   }

  getCurrentUser() {
    return this.afAuth.authState.pipe(first()).toPromise();
   }

}
