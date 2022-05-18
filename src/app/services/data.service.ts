import { Injectable } from '@angular/core';
import { User } from '../models/interfaces';
import { BehaviorSubject, Subscription } from 'rxjs';
import { DatabaseService } from './database.service';
import { AuthService } from './auth.service';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private user: User;
  public currentUser: BehaviorSubject<User>;
  private userSubscription: Subscription;

  constructor(
    private auth: AuthService,
    private db: DatabaseService,
  ) {
    this.user = this.getCleanUser();
    this.currentUser = new BehaviorSubject(this.user);
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
      wishlist: []
    }
  }
  
  getCleanProduct() {
    return {
      id: '',
      name: '',
      extendedName: '',
      description: '',
      price: '',
      priceWithoutTax: '',
      brand: '',
      imageUrl: '',
      category: '',
      discount: '',
    }
  }



  subscribeToUserData() {
    this.userSubscription = this.db.readDocument<User>('users', this.user.id).subscribe(userData => {
      this.user = userData;
    })
  }
  
  unsubscribeToUserData() {
    this.userSubscription.unsubscribe();
  }
}
