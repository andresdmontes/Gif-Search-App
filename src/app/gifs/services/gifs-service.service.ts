import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchGIFResponse } from '../interface/gifs.interfaces';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  private _historial: string[] = [];
  private _servicioUrl: string = 'https://api.giphy.com/v1/gifs';
  private apiKey: string = 'njQpAVZUvxiP2Yws1moyRTiyB5oTt9iV';

  //TODO: Cambiar any por subtipo correspondiente
  public resultados: Gif[] = [];

  get historial() {
    return [...this._historial]; //duplicado para no pasar por referencia
  }

  constructor(private http: HttpClient) {
    this._historial = JSON.parse(localStorage.getItem('historial')!) || [];
    this.resultados = JSON.parse(localStorage.getItem('resultado')!) || [];
  }

  buscarGifs(busqueda: string) {
    busqueda = busqueda.trim().toLowerCase();

    if (!this._historial.includes(busqueda)) {
      this._historial.unshift(busqueda);
      this._historial = this._historial.splice(0, 10);

      localStorage.setItem('historial', JSON.stringify(this._historial));
    }

    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('limit', '10')
      .set('q', busqueda);

    console.log(params.toString());

    this.http
      .get<SearchGIFResponse>(`${ this._servicioUrl }/search`, { params })
      .subscribe((response: SearchGIFResponse) => {
        localStorage.setItem('resultado', JSON.stringify(response.data));
        this.resultados = response.data;
      });
  }
}
