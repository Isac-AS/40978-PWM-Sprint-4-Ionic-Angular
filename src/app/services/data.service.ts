import { Injectable } from '@angular/core';
import { User } from '../models/interfaces';
import { BehaviorSubject } from 'rxjs';
import { DatabaseService } from './database.service';
import { AuthService } from './auth.service';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private user: User;
  public currentUser: BehaviorSubject<User>;

  constructor(
    private auth: AuthService,
    private db: DatabaseService,
  ) { 
    this.currentUser = new BehaviorSubject(this.user);
  }

  fetchCurrentUserData() {
    this.auth.getUid().then(currentUserId => {
      this.db.readDocument<User>('users', currentUserId).pipe(take(1)).subscribe(userData => {
        this.user = userData;
      })
    })
  }

  getCleanUser(): User {
    return {
      email: '',
      password: '',
      name: '',
      surname: '',
      bio: '',
      id: '',
      profile: 'regular',
      photoURL: '',
      shoppingCart: [],
    }
  }
}
