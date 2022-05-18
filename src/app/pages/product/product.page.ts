import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Product, User, createSchema } from 'src/app/models/interfaces';
import { AuthService } from 'src/app/services/auth.service';
import { DataService } from 'src/app/services/data.service';
import { DatabaseService } from 'src/app/services/database.service';
import { ListService } from 'src/app/services/list.service';
import { SQLiteService } from 'src/app/services/sqlite.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
})
export class ProductPage implements OnInit {

  private productId: string;

  public product: Product;
  private productSubscription: Subscription;

  public userData: User;
  private userDataSubscription: Subscription;

  public isLoggedIn: boolean;
  private userStateObserver: Observable<any>;
  private userStateSubscription: Subscription;

  sqlite: any;

  constructor(
    private auth: AuthService,
    private db: DatabaseService,
    private data: DataService,
    private list: ListService,
    private _sqlite: SQLiteService
  ) {
    this.product = this.data.getCleanProduct();
    this.userData = this.data.getCleanUser();
    this.productId = this.data.getProductId();
  }

  ngOnInit() { }

  ionViewWillEnter() {
    this.getProductSubscription();
    this.userStateObserver = this.auth.userState();
    this.userStateSubscription = this.userStateObserver.subscribe( res => {
      this.isLoggedIn = !!res;
      if (this.isLoggedIn) this.userSubscription();
    })
  }

  getProductSubscription() {
    this.productSubscription = this.db.readDocument<Product>('products', this.productId).subscribe(async product => {
      this.product = product;
    })
  }

  userSubscription() {
    this.auth.getUid().then(currentUserId => {
      this.userDataSubscription = this.db.readDocument<User>('users', currentUserId).subscribe(userData => {
        this.userData = userData;
      })
    })
  }

  ionViewWillLeave() {
    this.userStateSubscription.unsubscribe();
    this.productSubscription.unsubscribe();
    if (this.userDataSubscription) this.userDataSubscription.unsubscribe();
  }

  async addToWishlist(productId: string) {
    this.list.addToWishlist(productId, this.userData);
    if (this._sqlite.platform != 'web') {
      let db = await this._sqlite.createConnection("database" + this.userData.id, false, "no-encryption", 1)
      await db.open();
      let ret: any = await db.execute(createSchema);
      ret = await db.execute(`INSERT INTO wishlist (id) VALUES ("${productId}");`);
      console.log("Se acaba de añadir un elemento ->", ret)
      await db.close();
      await this._sqlite.closeAllConnections();
    }
  }

  async removeFromWishlist(productId: string) {
    this.list.removeFromWishList(productId, this.userData);
    if (this._sqlite.platform != 'web') {
      let db = await this._sqlite.createConnection("database" + this.userData.id, false, "no-encryption", 1)
      await db.open();
      let ret: any = await db.execute(createSchema);
      ret = await db.execute(`DELETE FROM wishlist WHERE id='${productId}';`);
      console.log("Se acaba de eliminar un elemento ->", ret)
      await db.close();
      await this._sqlite.closeAllConnections();
    }
  }

  isInWishlist(productId: string): boolean {
    return this.list.isInWishlist(this.userData.wishlist, productId);
  }
}
