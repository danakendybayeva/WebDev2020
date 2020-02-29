import { Component, OnInit } from '@angular/core';
import { FilmService} from '../film.service';
import { Film } from '../film';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {

  films: Film[];

  constructor(private filmService: FilmService) { }

  ngOnInit(): void {
    this.getFilms();
  }

  getFilms():void{
    this.filmService.getFilms()
      .subscribe(films => this.films = films);
  }

}
