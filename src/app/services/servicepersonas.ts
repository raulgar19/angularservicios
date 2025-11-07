import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Global } from '../Global';
import { environment } from '../../environments/environment.development';

@Injectable()
export class ServicePersonas {
  constructor(private _http: HttpClient) {}

  getPersonas(): Observable<any> {
    let urlApi = environment.urlApiPersonas;
    let request = 'api/personas';

    return this._http.get(urlApi + request);
  }

  getPersonasPromise(): Promise<any> {
    let urlApi = environment.urlApiPersonas;
    let request = 'api/personas';

    let promise = new Promise((resolve) => {
      this._http.get(urlApi + request).subscribe((response) => {
        resolve(response);
      });
    });

    return promise;
  }
}
