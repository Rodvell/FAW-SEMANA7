import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConversionComponent } from './component/conversion/conversion.component';
import { HConversionComponent } from './component/h-conversion/h-conversion.component';
import { PersonajesComponent } from './component/personajes/personajes.component';
import { HPersonajesComponent } from './component/h-personajes/h-personajes.component';
import { ToolbarComponent } from './component/toolbar/toolbar.component';

@NgModule({
  declarations: [
    AppComponent,
    ConversionComponent,
    HConversionComponent,
    PersonajesComponent,
    HPersonajesComponent,
    ToolbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
