import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CoreModule } from '../../core/core.module';
import { MdDialogRef } from '@angular/material';

import { PhotoGalleryComponent } from './photo-gallery.component';

describe('PhotoGalleryComponent', () => {
  let component: PhotoGalleryComponent;
  let fixture: ComponentFixture<PhotoGalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ CoreModule ],
      declarations: [ PhotoGalleryComponent ],
      providers: [ MdDialogRef ]
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
