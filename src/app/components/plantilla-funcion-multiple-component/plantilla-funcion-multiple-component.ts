import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ServicePlantilla } from '../../services/service.plantilla';
import { Plantilla } from '../../models/plantilla';

@Component({
  selector: 'app-plantilla-funcion-simple-component',
  standalone: false,
  templateUrl: './plantilla-funcion-multiple-component.html',
  styleUrl: './plantilla-funcion-multiple-component.css',
})
export class PlantillaFuncionMultipleComponent implements OnInit {
  public funciones!: Array<string>;
  public plantilla!: Array<Plantilla>;
  @ViewChild('selectFunciones') selectedFunciones!: ElementRef;
  public funcionesSeleccionadas!: Array<string>;

  constructor(private _service: ServicePlantilla) {}

  getPlantilla(): void {
    let aux = new Array<string>();
    for (var option of this.selectedFunciones.nativeElement.options) {
      if (option.selected == true) {
        aux.push(option.value);
      }
    }

    this.funcionesSeleccionadas = aux;

    this._service.getPlantillaFunciones(this.funcionesSeleccionadas).subscribe((response) => {
      this.plantilla = response;
    });
  }

  ngOnInit(): void {
    this._service.getFunciones().then((response) => {
      this.funciones = response;
    });
  }
}
