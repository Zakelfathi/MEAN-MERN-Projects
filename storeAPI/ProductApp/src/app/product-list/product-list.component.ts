import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products: any[] = [];
  selectedProductId: string | null = null;

  // Define properties for pagination
  itemsPerPage: number = 10; // Set the number of items per page
  currentPage: number = 1; // Initialize the current page

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts(): void {
    this.productService.getProducts().subscribe((data) => {
      this.products = data.products;
    });
  }
  onPageChange(newPageNumber: number): void {
    this.currentPage = newPageNumber;
    this.fetchProducts(); // Fetch new data for the updated page
  }

  showProductDetail(productId: string): void {
    this.selectedProductId = productId;
  }
}
