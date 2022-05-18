import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product, User, createSchema } from 'src/app/models/interfaces';
import { AuthService } from 'src/app/services/auth.service';
import { DataService } from 'src/app/services/data.service';
import { DatabaseService } from 'src/app/services/database.service';
import { ListService } from 'src/app/services/list.service';
import { SQLiteService } from 'src/app/services/sqlite.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.page.html',
  styleUrls: ['./wishlist.page.scss'],
})
export class WishlistPage implements OnInit {

  public userData: User;
  private userDataSubscription: Subscription;

  sqlite: any;
  wishlistIds: string[] = [];

  public products: Product[] = [];
  private productCollectionSubscription: Subscription;

  constructor(
    private auth: AuthService,
    private db: DatabaseService,
    private data: DataService,
    private list: ListService,
    private _sqlite: SQLiteService
  ) {
    this.userData = this.data.getCleanUser();
  }

  async ngOnInit() {
    this.productCollectionSubscription = this.db.readCollection<Product>('products').subscribe(async elements => {
      this.products = elements;
    })
  }

  ionViewWillEnter() {
    this.userSubscription();
  }
  
  ionViewDidEnter() {
    this.loadFromDB();
  }

  userSubscription() {
    this.auth.getUid().then(currentUserId => {
      this.userDataSubscription = this.db.readDocument<User>('users', currentUserId).subscribe(userData => {
        this.userData = userData;
      })
    })
  }

  async loadFromDB() {
    if (this._sqlite.platform != "web") {
      let db = await this._sqlite.createConnection("database", false, "no-encryption", 1)
      await db.open();
      let ret: any = await db.execute(createSchema);
      ret = await db.execute(`SELECT * FROM wishlist;`);
      for (let productId of ret.values) {
        this.wishlistIds.push(productId)
      }
    } else {
      this.wishlistIds = this.userData.wishlist
    }
  }

  ionViewWillLeave() {
    this.userDataSubscription.unsubscribe();
    this.productCollectionSubscription.unsubscribe();
  }

  async removeFromWishlist(productId: string) {
    this.list.removeFromWishList(productId, this.userData);
    if (this._sqlite.platform != "web") {
      let db = await this._sqlite.createConnection("database", false, "no-encryption", 1)
      await db.open();
      let ret: any = await db.execute(createSchema);
      ret = await db.execute(`DELETE FROM wishlist WHERE id='${productId}';`);
    }
  }

  contains(productId: string): boolean {
    return this.list.isInWishlist(this.wishlistIds, productId)
  }

}
