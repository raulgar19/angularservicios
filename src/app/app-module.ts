import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule } from '@angular/router';
import { routes } from './app.routing';
import { App } from './app';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { PersonasApiComponent } from './components/personas-api-component/personas-api-component';
import { ServicePersonas } from './services/servicepersonas';
import { PersonasStandaloneComponent } from './components/personas-standalone-component/personas-standalone-component';
import { ServiceCoche } from './services/service.coches';
import { CochesComponent } from './components/coches-component/coches-component';
import { PlantillaFuncionSimpleComponent } from './components/plantilla-funcion-simple-component/plantilla-funcion-simple-component';
import { MenuComponent } from './components/menu-component/menu-component';
import { ServicePlantilla } from './services/service.plantilla';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    App,
    PersonasApiComponent,
    CochesComponent,
    PlantillaFuncionSimpleComponent,
    MenuComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot(routes), PersonasStandaloneComponent, FormsModule],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient(),
    ServicePersonas,
    ServiceCoche,
    ServicePlantilla,
  ],
  bootstrap: [App],
})
export class AppModule {}
