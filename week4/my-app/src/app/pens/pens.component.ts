import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../products';
@Component({
  selector: 'app-pens',
  templateUrl: './pens.component.html',
  styleUrls: ['./pens.component.css']
})
export class PensComponent implements OnInit {

  pens: Product[];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getPens();
  }

  getPens(): void{
    this.productService.getPens()
      .subscribe(pens => this.pens = pens);
  }
}
