import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/models/interfaces';
import { DataService } from 'src/app/services/data.service';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {

  @Input() productId: string = '';

  public product: Product;
  private productSubscription: Subscription;

  constructor(
    private data: DataService,
    private db: DatabaseService,
  ) {
    this.product = this.data.getCleanProduct();
   }

  ngOnInit() {
    this.productSubscription = this.db.readDocument<Product>('products', this.productId).subscribe( async productInfo=> {
        this.product = productInfo;
    })
  }

  ngOnDestroy() {
    this.productSubscription.unsubscribe();
  }


  setId(id: string) {
    this.data.setProductId(id);
  }


}
