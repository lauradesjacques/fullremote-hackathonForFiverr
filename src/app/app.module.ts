import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { PageAvisComponent } from './page-avis/page-avis.component';
import { RouterModule } from '@angular/router';
import { ROUTES} from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { PageReponseComponent } from './page-reponse/page-reponse.component';



@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    PageAvisComponent,
    PageReponseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(ROUTES),
    HttpClientModule,
    ReactiveFormsModule
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
