import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Film } from './film';
import { MOVIE } from './films';


@Injectable({
  providedIn: 'root'
})
export class FilmService {

  constructor() { }

  getFilms(): Observable<Film[]>{
    return of(MOVIE);
  }

  getFilmById(id: number): Observable<Film>{
    return of(MOVIE.find(film => film.id === id));
  }
}
