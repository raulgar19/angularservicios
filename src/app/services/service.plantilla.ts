import { Injectable } from '@angular/core';
import { Plantilla } from '../models/plantilla';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ServicePlantilla {
  constructor(private _http: HttpClient) {}
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

  getPlantillaFunciones(funciones: Array<string>): Observable<Array<Plantilla>> {
    let datos = '';

    for (var funcion of funciones) {
      datos += 'funcion=' + funcion + '&';
    }
    datos = datos.substring(0, datos.length - 1);

    let request = 'api/plantilla/plantillafunciones?' + datos;
    let url = environment.urlApiPlantilla + request;

    return this._http.get<Array<Plantilla>>(url);
  }
}
