import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhonePipe } from '../pipes/phone.pipe';
import { PhotoGalleryComponent } from './photo-gallery/photo-gallery.component';

@NgModule({
  declarations: [
    PhonePipe,
    PhotoGalleryComponent
  ],
  entryComponents: [PhotoGalleryComponent],
  imports: [ CommonModule ],
  exports: [
    CommonModule,
    PhonePipe
  ]
})
export class SharedModule { }
