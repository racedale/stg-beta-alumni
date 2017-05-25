import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { routedComponents, HomeRoutingModule } from './home.routing.module';

@NgModule({
  imports: [SharedModule, HomeRoutingModule],
  declarations: [routedComponents]
})
export class HomeModule { }
