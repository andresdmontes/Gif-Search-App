import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs-service.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['../../app.component.css'],
})
export class BusquedaComponent {
  @ViewChild('txtBuscar') txtBuscar!: ElementRef<HTMLInputElement>;

  constructor( private gifsService: GifsService){}

  buscar(termino: string) {


    const valor = this.txtBuscar.nativeElement.value;
    if(valor.trim().length===0){return}
    this.gifsService.buscarGifs(valor);
    console.log(valor);
    this.txtBuscar.nativeElement.value="";
  }
}
