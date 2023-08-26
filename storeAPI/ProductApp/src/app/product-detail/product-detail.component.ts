import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  product: any;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const productId = params.get('id');
      console.log('Product ID:', productId); // Check if you're getting the correct ID
      if (productId !== null) {
        this.productService.getProductById(productId).subscribe((data) => {
          console.log('Product Data:', data); // Check if you're getting the product data
          this.product = data;
        });
      }
    });
  }
}
