import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/models/interfaces';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-product-loader',
  templateUrl: './product-loader.component.html',
  styleUrls: ['./product-loader.component.scss'],
})
export class ProductLoaderComponent implements OnInit {

  @Input() whatToLoad: string = 'all';
  @Input() minPrice: number = 0;
  @Input() maxPrice: number = 1000000;

  public products: Product[] = [];
  private productCollectionSubscription: Subscription;

  constructor(
    private db: DatabaseService,
  ) { }

  ngOnInit() {
    this.productCollectionSubscription = this.db.readCollection<Product>('products').subscribe(async elements => {
      this.products = elements;
    })
  }

  ngOnDestroy() {
    this.productCollectionSubscription.unsubscribe();
  }
}
