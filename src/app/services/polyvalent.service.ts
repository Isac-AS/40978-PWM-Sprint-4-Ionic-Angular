import { Injectable } from '@angular/core';
import { User } from '../models/interfaces';

@Injectable({
  providedIn: 'root'
})
export class PolyvalentService {

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
      shoppingCart: [],
    }
  }


}
