import { NgModule } from '@angular/core';

import { PhonePipe } from '../pipes/phone.pipe';
import { PhotoGalleryComponent } from './photo-gallery/photo-gallery.component';

@NgModule({
  declarations: [
    PhonePipe,
    PhotoGalleryComponent
  ],
  entryComponents: [PhotoGalleryComponent],
  imports: [
  ],
  exports: [
    PhonePipe
  ]
})
export class SharedModule { }
