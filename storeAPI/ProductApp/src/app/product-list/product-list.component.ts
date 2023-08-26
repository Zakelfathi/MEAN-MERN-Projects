import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products!: any[];
  currentPage: number = 1;
  itemsPerPage: number = 6; // Adjust the number of items per page

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data) => {
      this.products = data.products;
    });
  }

  getStars(rating: number): any[] {
    const stars = [];
    const roundedRating = Math.round(rating);
    for (let i = 0; i < roundedRating; i++) {
      stars.push(i);
    }
    return stars;
  }

  getPageNumbers(): number[] {
    const pageCount = Math.ceil(
      (this.products?.length || 0) / this.itemsPerPage
    );
    return Array.from({ length: pageCount }, (_, index) => index + 1);
  }

  onPageChange(page: number): void {
    this.currentPage = page;
  }
}
