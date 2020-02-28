import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Product } from '../products'
import { ProductService }  from '../product.service';

@Component({
  selector: 'app-washitape-detail',
  templateUrl: './washitape-detail.component.html',
  styleUrls: ['./washitape-detail.component.css']
})
export class WashitapeDetailComponent implements OnInit {

  washitape: Product;

  constructor(
    private route:ActivatedRoute,
    private productService: ProductService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getWashitapeById();
  }

  getWashitapeById():void{
    const id = +this.route.snapshot.paramMap.get('id');
    this.productService.getWashitapeById(id)
      .subscribe(washitape => this.washitape = washitape);
  }

}
