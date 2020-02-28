import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../products';

@Component({
  selector: 'app-washitapes',
  templateUrl: './washitapes.component.html',
  styleUrls: ['./washitapes.component.css']
})
export class WashitapesComponent implements OnInit {

  washitapes: Product[];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getWashitapes();
  }

  getWashitapes(): void{
    this.productService.getWashitapes()
      .subscribe(washitapes => this.washitapes = washitapes);
  }

}
