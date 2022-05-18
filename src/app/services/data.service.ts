import { Injectable } from '@angular/core';
import { Product, User } from '../models/interfaces';
import { BehaviorSubject, Subscription } from 'rxjs';
import { DatabaseService } from './database.service';
import { AuthService } from './auth.service';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private productId: string;
  private category: string;

  constructor() { }

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
      wishlist: []
    }
  }
  
  getCleanProduct(): Product {
    return {
      id: '',
      name: '',
      extendedName: '',
      description: '',
      price: 0,
      priceWithoutTax: 0,
      brand: '',
      imageUrl: '',
      category: '',
      discount: 0,
    }
  }

  setProductId(id: string) {
    this.productId = id;
  }

  getProductId(): string {
    return this.productId;
  }

  setCategory(category: string) {
    this.category = category;
  }

  getCategory(): string {
    return this.category;
  }
}
