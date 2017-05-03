import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { firebaseConfig } from '../environments/firebase.config';
import { CoreModule } from './core/core.module';
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
    CoreModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
