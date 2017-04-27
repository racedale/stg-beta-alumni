import { Component, OnInit } from '@angular/core';
import {MdDialogRef} from '@angular/material';

@Component({
  selector: 'stg-photo-gallery',
  templateUrl: './photo-gallery.component.html',
  styleUrls: ['./photo-gallery.component.scss']
})
export class PhotoGalleryComponent implements OnInit {

  constructor(public dialogRef: MdDialogRef<PhotoGalleryComponent>) {
  }

  ngOnInit() {
  }
  
  data = this.dialogRef.componentInstance;
}
