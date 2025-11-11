import { Component, OnInit } from '@angular/core';
import { ServicePlantilla } from '../../services/service.plantilla';
import { Plantilla } from '../../models/plantilla';

@Component({
  selector: 'app-plantilla-funcion-simple-component',
  standalone: false,
  templateUrl: './plantilla-funcion-simple-component.html',
  styleUrl: './plantilla-funcion-simple-component.css',
})
export class PlantillaFuncionSimpleComponent implements OnInit {
  public funciones!: Array<string>;
  public plantilla!: Array<Plantilla>;

  constructor(private _service: ServicePlantilla) {}

  getPlantilla(funcion: string): void {
    this._service.getPlantilla(funcion).then((response) => {
      this.plantilla = response;
    });
  }

  ngOnInit(): void {
    this._service.getFunciones().then((response) => {
      this.funciones = response;
    });
  }
}
