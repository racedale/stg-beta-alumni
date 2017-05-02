import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AlumniComponent } from './alumni/alumni.component';
import { NewslettersComponent } from './newsletters/newsletters.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ContactComponent } from './contact/contact.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'alumni', component: AlumniComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'newsletters', component: NewslettersComponent },
  { path: '**', component: PageNotFoundComponent }
];

export const routableComponents = [
    HomeComponent,
    AlumniComponent,
    ContactComponent,
    NewslettersComponent,
    PageNotFoundComponent
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
