import { Injectable } from '@angular/core';
import { User } from '../models/interfaces';
import { DatabaseService } from './database.service';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor(
    private db: DatabaseService,
  ) { }

  isInWishlist(wishlist: string[], productId: string): boolean {
    return wishlist.indexOf(productId) > -1;
  }

  addToWishlist(productId: string, user: User) {
    if (!this.isInWishlist(user.wishlist, productId)) {
      user.wishlist.push(productId);
      this.db.updateDocument(user, 'users', user.id);
    }
  }

  removeFromWishList(productId: string, user: User){
    user.wishlist.forEach((value, index) => {
      if (value === productId) {
        user.wishlist.splice(index, 1)
      }
    })
    this.db.updateDocument(user, 'users', user.id)
  }
}
