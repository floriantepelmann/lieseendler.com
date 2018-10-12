import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent} from "./home/home.component";
import { DetailComponent} from "./detail/detail.component";
import {VitaComponent} from "./vita/vita.component";
import {ContactComponent} from "./contact/contact.component";
import {LinksComponent} from "./links/links.component";

const routes: Routes = [
    {
      path: "",
      component: HomeComponent
    },
    {
      path: "detail/:work",
      component: DetailComponent
    },
    {
      path: "vita",
      component: VitaComponent
    },
    {
      path: "contact",
      component: ContactComponent
    },
    {
      path: "links",
      component: LinksComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
