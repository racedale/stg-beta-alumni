import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CoreModule } from '../../core/core.module';
import { SharedModule } from '../shared.module';
import { MdDialogRef } from '@angular/material';

import { PhotoGalleryComponent } from './photo-gallery.component';

class MdDialogRefMock {
  componentInstance = {};
}

describe('PhotoGalleryComponent', () => {
  let component: PhotoGalleryComponent;
  let fixture: ComponentFixture<PhotoGalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ CoreModule, SharedModule ],
      // declarations: [ PhotoGalleryComponent ],
      providers: [ { provide: MdDialogRef, useClass: MdDialogRefMock } ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
