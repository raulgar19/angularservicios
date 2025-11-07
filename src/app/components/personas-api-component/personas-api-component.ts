import { Component, OnInit } from '@angular/core';
import { Persona } from '../../models/persona';
import { ServicePersonas } from '../../services/servicepersonas';

@Component({
  selector: 'app-personas-api-component',
  standalone: false,
  templateUrl: './personas-api-component.html',
  styleUrl: './personas-api-component.css',
})
export class PersonasApiComponent implements OnInit {
  public personas!: Array<Persona>;

  constructor(private _service: ServicePersonas) {}

  ngOnInit(): void {
    this._service.getPersonas().subscribe((response) => {
      console.log('Obteniendo personas...');
      this.personas = response;
    });

    this._service.getPersonasPromise().then((response) => {
      console.log('Obteniendo personas...');
      this.personas = response;
    });
  }
}
