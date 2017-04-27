import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { NewslettersComponent } from './newsletters/newsletters.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PhotoGalleryComponent } from './photo-gallery/photo-gallery.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'newsletters',
    component: NewslettersComponent
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    FooterComponent,
    NewslettersComponent,
    HomeComponent,
    PageNotFoundComponent,
    PhotoGalleryComponent
  ],
  entryComponents: [PhotoGalleryComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
