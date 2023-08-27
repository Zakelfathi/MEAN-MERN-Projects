import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';
@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css'],
})
export class MainLayoutComponent {
  selectedProductId: string | null = null;
  searchTerm: string = ''; // For the search input

  constructor(private productService: ProductService) {}

  searchProducts(searchTerm: string): void {
    this.productService.searchProductsByName(searchTerm).subscribe((data) => {
      // Handle the search results here
    });
  }

  onPageChange(event: any): void {}
}
