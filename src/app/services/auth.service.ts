import { Injectable } from '@angular/core';
import { User } from '../models/interfaces';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private adminUid: string = '1QpnBzjOCYe6y4mAxU1I2yP47kl1';

  constructor(private authFirebase: AngularFireAuth) { }

  register(data: User) {
    return this.authFirebase.createUserWithEmailAndPassword(data.email,data.password);
  }

  login(email: string, password:string) {
    return this.authFirebase.signInWithEmailAndPassword(email, password);
  }

  logout(){
    return this.authFirebase.signOut();
  }

  userState() {
    return this.authFirebase.authState;
  }
}
