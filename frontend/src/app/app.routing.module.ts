import { NgModule } from '@angular/core';
import { PreloadAllModules, Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AlumniComponent } from './alumni/alumni.component';
import { NewslettersComponent } from './newsletters/newsletters.component';
import { PayRentComponent } from './pay-rent/pay-rent.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'alumni', component: AlumniComponent },
  { path: 'contact', loadChildren: 'app/contact/contact.module#ContactModule' },
  { path: 'newsletters', component: NewslettersComponent },
  { path: 'pay-rent', component: PayRentComponent },
  { path: '**', component: PageNotFoundComponent }
];

export const routableComponents = [
    HomeComponent,
    AlumniComponent,
    NewslettersComponent,
    PayRentComponent,
    PageNotFoundComponent
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
