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
import { AppRoutingModule, routableComponents } from './app.routing.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { PhotoGalleryComponent } from './photo-gallery/photo-gallery.component';
import { PhonePipe } from './pipes/phone.pipe';

@NgModule({
  declarations: [
    AppComponent,
    routableComponents,
    SidebarComponent,
    FooterComponent,
    PhotoGalleryComponent,
    PhonePipe
  ],
  entryComponents: [PhotoGalleryComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
