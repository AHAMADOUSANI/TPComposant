import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CVComposantComponent } from './cv-composant/cv-composant.component';
import { MonComposantComponent } from './mon-composant/mon-composant.component';
import { DetailComposantComponent } from './detail-composant/detail-composant.component';

@NgModule({
  declarations: [
    AppComponent,
    CVComposantComponent,
    MonComposantComponent,
    DetailComposantComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule // Ajoutez FormsModule ici
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
