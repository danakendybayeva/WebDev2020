
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Product } from '../products'
import { ProductService }  from '../product.service';

@Component({
  selector: 'app-notebook-detail',
  templateUrl: './notebook-detail.component.html',
  styleUrls: ['./notebook-detail.component.css']
})
export class NotebookDetailComponent implements OnInit {
  notebook: Product;

  constructor(
    private route:ActivatedRoute,
    private productService: ProductService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getNotebookById();
  }

  getNotebookById():void{
    const id = +this.route.snapshot.paramMap.get('id');
    this.productService.getNotebookById(id)
      .subscribe(notebook => this.notebook = notebook);
  }

}
