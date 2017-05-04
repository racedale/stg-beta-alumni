import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContactComponent } from './contact.component';

const routes: Routes = [
  { path: 'contact', component: ContactComponent }
];

export const routedComponents = [
  ContactComponent,
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class ContactRoutingModule { }
