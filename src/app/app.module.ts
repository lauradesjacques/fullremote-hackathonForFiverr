import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { PageAvisComponent } from './page-avis/page-avis.component';
import { RouterModule } from '@angular/router';
import { ROUTES} from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    PageAvisComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(ROUTES)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
