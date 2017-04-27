import { Component, OnInit } from '@angular/core';
import {MdDialog} from '@angular/material';
import { PhotoGalleryComponent } from '../photo-gallery/photo-gallery.component';

@Component({
  selector: 'stg-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public dialog: MdDialog) { }

  ngOnInit() {
  }

  title = 'HC 2015';
  intro = 'Homecoming  was a huge success this year!   A GREAT times was had with 27 brothers participate in the golf outing Friday afternoon at the Kirksville Country Club.   Friday night was the usual socializing at the Dukum Inn.   A wonderful lunch honoring Keith Dinsmore was served for about 100 active and alumni brothers and their wives at the ABC room of the Beta house. Speakers including former National Fraternity CEO Bill Bernier, Bill Koch and Chuck Foudree. The first Keith Dinsmore Memorial Scholarship was awarded to Lucas Meyrer. In addition to the great meal a local musician added musical entertainment during the event.';
  images = [
    { cols: 3, rows: 1, src: 'src/assets/images/home/homecoming2016/hc_2016_1.jpg', altText: 'homecoming 2016'},
    { cols: 1, rows: 2, src: 'src/assets/images/home/homecoming2016/hc_2016_2.jpg', altText: 'homecoming 2016'},
    { cols: 1, rows: 1, src: 'src/assets/images/home/homecoming2016/hc_2016_3.jpg', altText: 'homecoming 2016'},
    { cols: 2, rows: 1, src: 'src/assets/images/home/homecoming2016/hc_2016_4.jpg', altText: 'homecoming 2016'},
    { cols: 2, rows: 1, src: 'src/assets/images/home/homecoming2016/hc_2016_5.jpg', altText: 'homecoming 2016'},
    { cols: 2, rows: 1, src: 'src/assets/images/home/homecoming2016/hc_2016_6.jpg', altText: 'homecoming 2016'},
    { cols: 2, rows: 1, src: 'src/assets/images/home/homecoming2016/hc_2016_7.jpg', altText: 'homecoming 2016'},
    { cols: 2, rows: 1, src: 'src/assets/images/home/homecoming2016/hc_2016_8.jpg', altText: 'homecoming 2016'},
    { cols: 2, rows: 1, src: 'src/assets/images/home/homecoming2016/hc_2016_9.jpg', altText: 'homecoming 2016'},
  ];

  openDialog(image) {
    let dialogRef = this.dialog.open(PhotoGalleryComponent);
    dialogRef.componentInstance.data = image;

    dialogRef.afterClosed().subscribe(result => {
      console.log(result)
    });
  }
}
