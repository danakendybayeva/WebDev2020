import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Product } from '../products'
import { ProductService }  from '../product.service';

@Component({
  selector: 'app-sticker-detail',
  templateUrl: './sticker-detail.component.html',
  styleUrls: ['./sticker-detail.component.css']
})
export class StickerDetailComponent implements OnInit {

  sticker: Product;

  constructor(
    private route:ActivatedRoute,
    private productService: ProductService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getStickerById();
  }

  getStickerById():void{
    const id = +this.route.snapshot.paramMap.get('id');
    this.productService.getStickerById(id)
      .subscribe(sticker => this.sticker = sticker);
  }

}
