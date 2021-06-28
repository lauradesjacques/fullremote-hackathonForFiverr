import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PageAvisComponent } from './page-avis/page-avis.component';
import { Routes} from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';


export const ROUTES: Routes = [
  {path:"page-avis", component: PageAvisComponent },
  {path:"", component: AccueilComponent },



];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
