import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InternalComponent } from './internal/internal.component';
import { ExternalComponent } from './external/external.component';

@NgModule({
  declarations: [
    AppComponent,
    InternalComponent,
    ExternalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
