import { Injectable } from '@angular/core';
import { Coche } from '../models/coche';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';

@Injectable()
export class ServiceCoche {
  constructor(private _http: HttpClient) {}

  getCoches(): Promise<Array<Coche>> {
    let request = 'webresources/coches';
    let url = environment.urlApiCoches + request;
    console.log('Obteniendo coches...');
    const coches = fetch(url).then((response) => response.json());
    return coches;
  }
}
