import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilmService} from '../film.service';
import { Film } from '../film';

@Component({
  selector: 'app-film-detail',
  templateUrl: './film-detail.component.html',
  styleUrls: ['./film-detail.component.css']
})
export class FilmDetailComponent implements OnInit {

  film: Film; 
  constructor(
    private route:ActivatedRoute,
    private filmService:FilmService
  ) { }

  ngOnInit(): void {
    this.getFilmById();
  }

  getFilmById():void{
    const id = +this.route.snapshot.paramMap.get('id');
    this.filmService.getFilmById(id).subscribe(film => this.film = film);
  }

  increaseViews():number{
    const views = +this.route.snapshot.paramMap.get('view-count');
    return views + 1;
  }
}
