import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { routedComponents, ContactRoutingModule } from './contact.routing.module';

@NgModule({
  imports: [SharedModule, ContactRoutingModule],
  declarations: [routedComponents],
})
export class ContactModule { }
