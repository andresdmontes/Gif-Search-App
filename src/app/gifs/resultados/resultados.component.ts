import { Component } from '@angular/core';
import { GifsService } from '../services/gifs-service.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['../../app.component.css']
})
export class ResultadosComponent {

  constructor(private gifsService: GifsService){};


  get resultados(){
    return this.gifsService.resultados;
  }
}
