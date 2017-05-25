import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phone'
})
export class PhonePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let tel = value.toString().trim().replace(/^\+/, '');
     let country, city, number;

        switch (tel.length) {
            case 10: // +1PPP####### -> C (PPP) ###-####
                country = 1;
                city = tel.slice(0, 3);
                number = tel.slice(3);
                break;

            case 11: // +CPPP####### -> CCC (PP) ###-####
                country = tel[0];
                city = tel.slice(1, 4);
                number = tel.slice(4);
                break;

            case 12: // +CCCPP####### -> CCC (PP) ###-####
                country = tel.slice(0, 3);
                city = tel.slice(3, 5);
                number = tel.slice(5);
                break;

            default:
                return value;
        }

        if (country == 1) {
            country = "";
        }

        number = number.slice(0, 3) + '-' + number.slice(3);

        return (country + " (" + city + ") " + number).trim();
  }

}
