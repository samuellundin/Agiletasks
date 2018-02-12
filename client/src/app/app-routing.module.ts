import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";


const appRoutes: Routes = [

  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: Compenent},


];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {

}
