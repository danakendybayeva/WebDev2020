
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../products';
@Component({
  selector: 'app-notebooks',
  templateUrl: './notebooks.component.html',
  styleUrls: ['./notebooks.component.css']
})
export class NotebooksComponent implements OnInit {

  notebooks: Product[];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getNotebooks();
  }

  getNotebooks(): void{
    this.productService.getNotebooks()
      .subscribe(notebooks => this.notebooks = notebooks);
  }
}
