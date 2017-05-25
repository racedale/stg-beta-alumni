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
      "phone": "9703014154",
      "profileImg": "src/assets/images/contact/profile-pic.svg"
    },
    {
      "role": "Vice President",
      "firstName": "Dale",
      "lastName": "Barrett",
      "email": "dbarr6569@socket.net",
      "phone": "6606657721",
      "profileImg": "src/assets/images/contact/profile-pic.svg"
    },
    {
      "role": "Treasurer",
      "firstName": "Brad",
      "lastName": "Beard",
      "email": "beards@cableone.net",
      "phone": "6606651928",
      "profileImg": "src/assets/images/contact/profile-pic.svg"
    },
    {
      "role": "Secretary",
      "firstName": "Dale",
      "lastName": "Race",
      "email": "race.dale@gmail.com",
      "phone": "6363577457",
      "profileImg": "src/assets/images/contact/profile-pic.svg"
    },
  ];
  houseCommittee = [
    {
      "role": "Chair",
      "firstName": "Richard",
      "lastName": "Holmes",
      "email": "rich1bigdog@aol.com",
      "phone": "9703014154",
      "profileImg": "src/assets/images/contact/profile-pic.svg"
    },
    {
      "role": "Alumnus",
      "firstName": "Rob",
      "lastName": "Shults",
      "email": "robshults@tx.rr.com",
      "phone": "972404221",
      "profileImg": "src/assets/images/contact/profile-pic.svg"
    },
    {
      "role": "Alumnus",
      "firstName": "Ken",
      "lastName": "Slaughter",
      "email": "ken.slaughter@mchsi.com",
      "phone": "3193775920",
      "profileImg": "src/assets/images/contact/profile-pic.svg"
    },
    {
      "role": "Alumnus",
      "firstName": "Carl",
      "lastName": "Baldwin",
      "email": "csbaldwin2513@sbcglobal.net",
      "phone": "6603418174",
      "profileImg": "src/assets/images/contact/profile-pic.svg"
    },
    {
      "role": "Active",
      "firstName": "Andrew",
      "lastName": "Snider",
      "email": "@truman.edu",
      "phone": "3145419165",
      "profileImg": "src/assets/images/contact/profile-pic.svg"
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
