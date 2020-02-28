import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../products';

@Component({
  selector: 'app-stickers',
  templateUrl: './stickers.component.html',
  styleUrls: ['./stickers.component.css']
})
export class StickersComponent implements OnInit {

  stickers: Product[];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getStickers();
  }

  getStickers(): void{
    this.productService.getStickers()
      .subscribe(stickers => this.stickers = stickers);
  }

}
