import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from './products';
import { PENS } from './pens';
import { NOTEBOOKS } from './notebooks';
import { STICKERS } from './stickers';
import { WASHITAPES } from './washitapes';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getPens(): Observable<Product[]>{
    return of(PENS);
  }
  getPenById(id: number): Observable<Product>{
    return of(PENS.find(pen => pen.id === id));
  }

  getStickers(): Observable<Product[]>{
    return of(STICKERS);
  }
  getStickerById(id: number): Observable<Product>{
    return of(STICKERS.find(stickers => stickers.id === id));
  }

  getNotebooks(): Observable<Product[]>{
    return of(NOTEBOOKS);
  }
  getNotebookById(id: number): Observable<Product>{
    return of(NOTEBOOKS.find(notebook => notebook.id === id));
  }

  getWashitapes(): Observable<Product[]>{
    return of(WASHITAPES);
  }
  getWashitapeById(id: number): Observable<Product>{
    return of(WASHITAPES.find(washitape => washitape.id === id));
  }
}
