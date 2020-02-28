import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { PensComponent } from './pens/pens.component';
import { NotebooksComponent } from './notebooks/notebooks.component';
import { StickersComponent } from './stickers/stickers.component';
import { WashitapesComponent } from './washitapes/washitapes.component';
import { NotebookDetailComponent } from './notebook-detail/notebook-detail.component';
import { PenDetailComponent } from './pen-detail/pen-detail.component';
import { StickerDetailComponent } from './sticker-detail/sticker-detail.component';
import { WashitapeDetailComponent } from './washitape-detail/washitape-detail.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    PensComponent,
    NotebooksComponent,
    StickersComponent,
    WashitapesComponent,
    NotebookDetailComponent,
    PenDetailComponent,
    StickerDetailComponent,
    WashitapeDetailComponent
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/