import { Injectable } from '@angular/core';
import { Plantilla } from '../models/plantilla';
import { environment } from '../../environments/environment.development';

@Injectable()
export class ServicePlantilla {
  getFunciones(): Promise<Array<string>> {
    let request = 'api/plantilla/funciones';
    let url = environment.urlApiPlantilla + request;
    console.log('Obteniendo funciones...');
    return fetch(url).then((response) => response.json());
  }

  getPlantilla(funcion: string): Promise<Array<Plantilla>> {
    let request = 'api/plantilla/plantillafuncion/' + funcion;
    let url = environment.urlApiPlantilla + request;

    return fetch(url).then((response) => response.json());
  }
}
