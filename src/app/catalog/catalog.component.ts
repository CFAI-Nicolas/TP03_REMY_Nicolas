// src/app/catalog/catalog.component.ts
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product.model';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {
  products: Product[] = [];
  filteredProducts: Product[] = [];
  filterText: string = '';
  sortBy: string = 'name';
  reverseSort: boolean = false;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(data => {
      this.products = data;
      this.filteredProducts = data;
    });
  }

  applyFilter(): void {
    this.filteredProducts = this.products.filter(product =>
      product.name.toLowerCase().includes(this.filterText.toLowerCase())
    );
  }

  applySort(): void {
    if (this.sortBy === 'name') {
      this.filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
    } else if (this.sortBy === 'price') {
      this.filteredProducts.sort((a, b) => a.price - b.price);
    }else if (this.sortBy === 'id') {
      this.filteredProducts.sort((a, b) => a.id - b.id);
    }else if (this.sortBy === 'Description') {
      this.filteredProducts.sort((a, b) => a.description.localeCompare(b.description));
    }

    this.reverseSort = !this.reverseSort;

    if (this.reverseSort) {
      this.filteredProducts.reverse();
    }
  }
}
