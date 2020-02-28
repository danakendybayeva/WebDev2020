import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PensComponent} from './pens/pens.component';
import { PenDetailComponent } from './pen-detail/pen-detail.component';
import { NotebooksComponent} from './notebooks/notebooks.component';
import { NotebookDetailComponent } from './notebook-detail/notebook-detail.component';
import { StickersComponent } from './stickers/stickers.component';
import { StickerDetailComponent } from './sticker-detail/sticker-detail.component';
import { WashitapesComponent} from './washitapes/washitapes.component';
import { WashitapeDetailComponent } from './washitape-detail/washitape-detail.component';

const routes: Routes = [
  // { path: '', redirectTo: '/pens', pathMatch: 'full' },
  { path: 'pens', component: PensComponent },
  { path: 'notebooks', component: NotebooksComponent },
  { path: 'stickers', component: StickersComponent },
  { path: 'washitapes', component: WashitapesComponent },
  { path: 'pen/:id', component: PenDetailComponent },
  { path: 'notebook/:id', component: NotebookDetailComponent },
  { path: 'sticker/:id', component: StickerDetailComponent },
  { path: 'washitape/:id', component: WashitapeDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
