import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NewslettersComponent } from './newsletters.component';

const routes: Routes = [
  { path: '', component: NewslettersComponent }
];

export const routedComponents = [
  NewslettersComponent,
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class NewslettersRoutingModule { }
