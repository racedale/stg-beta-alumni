import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { routedComponents, NewslettersRoutingModule } from './newsletters.routing.module';

@NgModule({
  imports: [NewslettersRoutingModule],
  declarations: [routedComponents],
})
export class NewslettersModule { }
