import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MarvelComponent } from './marvel/marvel.component';
import { HttpClientModule } from '@angular/common/http';
import { MarvelService } from './marvel.service';
import { FormsModule } from '@angular/forms';
import { HighlightSearch } from './marvel/highilight.pipe';
@NgModule({
  declarations: [
    AppComponent,
    MarvelComponent,
    HighlightSearch
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,

  ],
  providers: [MarvelService,],
  bootstrap: [AppComponent]
})
export class AppModule { }
