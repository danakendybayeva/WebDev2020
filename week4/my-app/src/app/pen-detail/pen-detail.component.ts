import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Product } from '../products'
import { ProductService }  from '../product.service';

@Component({
  selector: 'app-pen-detail',
  templateUrl: './pen-detail.component.html',
  styleUrls: ['./pen-detail.component.css']
})
export class PenDetailComponent implements OnInit {
  pen: Product;

  constructor(
    private route:ActivatedRoute,
    private productService: ProductService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getPenById();
  }

  getPenById():void{
    const id = +this.route.snapshot.paramMap.get('id');
    this.productService.getPenById(id)
      .subscribe(pen => this.pen = pen);
  }

}
