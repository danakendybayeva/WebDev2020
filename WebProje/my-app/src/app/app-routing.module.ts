import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BooksComponent} from './books/books.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { GenresComponent } from './genres/genres.component'
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent} from './sign-up/sign-up.component';
import { MainComponent} from './main/main.component';


const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'genres/:id', component: GenresComponent },
  { path: 'books', component: BooksComponent },
  { path: 'books/:id', component: BookDetailComponent },
  { path: 'cart', component: CartComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignUpComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
