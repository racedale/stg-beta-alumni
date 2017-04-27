import { Component, OnInit } from '@angular/core';
import {ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'stg-newsletters',
  templateUrl: './newsletters.component.html',
  styleUrls: ['./newsletters.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NewslettersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  newsletters = [
    {"title": "Fall 2016 Newsletter", "link": "http://q.b5z.net/i/u/10103480/f/Newsletter_Final.pdf"},
    {"title": "Fall 2015 Newsletter", "link": "http://q.b5z.net/i/u/10103480/f/Fall__15_Newsletter_1.pdf"},
    {"title": "Fall 2014 Newsletter", "link": "http://q.b5z.net/i/u/10103480/f/Fall_2014_-_Newsletter__Final_.pdf"},
    {"title": "Spring 2014 Newsletter", "link": "http://q.b5z.net/i/u/10103480/f/Beta_NEWSLETTER_2014.pdf"},
    {"title": "January 2014 Newsletter", "link": "http://q.b5z.net/i/u/10103480/f/AlumniNewsletterJan14.pdf"},
    {"title": "Winter 2012 Newsletter", "link": "http://q.b5z.net/i/u/10103480/f/Alumni_Winter_Newsletter_Dec2012.pdf"},
    {"title": "Fall 2012 Newsletter", "link": "http://q.b5z.net/i/u/10103480/f/ALUMNI_NEWS_LETTER.pdf"},
    {"title": "Beta Newsletter Summer 2011", "link": "http://q.b5z.net/i/u/10103480/f/Beta_Nws_3-20111.doc"},
    {"title": "Spring 2011 Beta Alumni Newsletter", "link": "http://q.b5z.net/i/u/10103480/f/Beta_Nws_2-2011.pdf"},
    {"title": "Winter 2011 Newsletter", "link": "http://q.b5z.net/i/u/10103480/f/TheBetaWinter2011newsletter.doc"}
  ];
}
