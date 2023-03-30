import { Component } from '@angular/core';
import { GifsService } from '../../gifs/services/gifs-service.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['../../app.component.css'],
})
export class SidebarComponent {
  constructor(private gifsService: GifsService) {}

  get historial() {
    return this.gifsService.historial;
  }

  buscar(item: string) {
    console.log(item);
    this.gifsService.buscarGifs(item);
  }
}
