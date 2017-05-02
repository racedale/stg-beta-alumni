import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { AngularFireModule } from 'angularfire2';

import { firebaseConfig } from '../environments/firebase.config';
import { AuthService } from './providers/auth.service';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AlumniComponent } from './alumni/alumni.component';
import { NewslettersComponent } from './newsletters/newsletters.component';
import { PhotoGalleryComponent } from './photo-gallery/photo-gallery.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ContactComponent } from './contact/contact.component';
import { PhonePipe } from './pipes/phone.pipe';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'alumni',
    component: AlumniComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
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
    AlumniComponent,
    NewslettersComponent,
    HomeComponent,
    PhotoGalleryComponent,
    PageNotFoundComponent,
    ContactComponent,
    PhonePipe
  ],
  entryComponents: [PhotoGalleryComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpModule,
    MaterialModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
