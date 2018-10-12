import { BrowserModule } from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpModule} from "@angular/http";
import { WorksService} from "./works.service";
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ReversePipe } from "../pipes/reverse_order.pipe";
import { VitaComponent } from './vita/vita.component';
import { ContactComponent } from './contact/contact.component';
import { LinksComponent } from './links/links.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailComponent,
    HeaderComponent,
    FooterComponent,
    ReversePipe,
    VitaComponent,
    ContactComponent,
    LinksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [WorksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
