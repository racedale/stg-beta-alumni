import { Component, OnInit } from '@angular/core';
import { PhonePipe } from '../pipes/phone.pipe';

@Component({
  selector: 'stg-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  officers = [
    {
      "role": "President",
      "firstName": "Richard",
      "lastName": "Holmes",
      "email": "rich1bigdog@aol.com",
      "phone": "9703014154"
    },
    {
      "role": "Vice President",
      "firstName": "Dale",
      "lastName": "Barrett",
      "email": "dbarr6569@socket.net",
      "phone": "6606657721"
    },
    {
      "role": "Treasurer",
      "firstName": "Brad",
      "lastName": "Beard",
      "email": "beards@cableone.net",
      "phone": "6606651928"
    },
    {
      "role": "Secretary",
      "firstName": "Dale",
      "lastName": "Race",
      "email": "race.dale@gmail.com",
      "phone": "6363577457"
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
