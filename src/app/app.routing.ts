import { RouterModule, Routes } from '@angular/router';
import { CochesComponent } from './components/coches-component/coches-component';
import { PersonasApiComponent } from './components/personas-api-component/personas-api-component';
import { PlantillaFuncionSimpleComponent } from './components/plantilla-funcion-simple-component/plantilla-funcion-simple-component';
import { PersonasStandaloneComponent } from './components/personas-standalone-component/personas-standalone-component';
import { NgModule } from '@angular/core';
import { PlantillaFuncionMultipleComponent } from './components/plantilla-funcion-multiple-component/plantilla-funcion-multiple-component';

export const routes: Routes = [
  { path: '', component: CochesComponent },
  { path: 'personas', component: PersonasApiComponent },
  { path: 'personasStandalone', component: PersonasStandaloneComponent },
  { path: 'plantillaSimple', component: PlantillaFuncionSimpleComponent },
  { path: 'plantillaMultiple', component: PlantillaFuncionMultipleComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
