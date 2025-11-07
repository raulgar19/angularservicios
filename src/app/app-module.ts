import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { provideHttpClient } from '@angular/common/http';
import { PersonasApiComponent } from './components/personas-api-component/personas-api-component';
import { ServicePersonas } from './services/servicepersonas';
import { PersonasStandaloneComponent } from './components/personas-standalone-component/personas-standalone-component';

@NgModule({
  declarations: [App, PersonasApiComponent],
  imports: [BrowserModule, AppRoutingModule, PersonasStandaloneComponent],
  providers: [provideBrowserGlobalErrorListeners(), provideHttpClient(), ServicePersonas],
  bootstrap: [App],
})
export class AppModule {}
