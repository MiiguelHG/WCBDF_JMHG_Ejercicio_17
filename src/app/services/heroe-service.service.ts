import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Heroes } from '../data/heroes-entity';
import { Heroe } from '../data/heroe-entity';
import { HeroeData } from '../data/heroe-data';

@Injectable({
  providedIn: 'root'
})
export class HeroeServiceService {
  urlApi = "https://wcbdf-jmhg-ejercicio-10.onrender.com/api/v1/heroes"

  // Inyectamos el servicio HttpClient para poder hacer peticiones HTTP
  constructor(private httpCliente: HttpClient) { }

  // Get all heroes
  getAllHeroes(): Observable<Heroes> {
    return this.httpCliente.get<Heroes>(this.urlApi);
  }

  // Get heroe por id
  getHeroeById(id: number): Observable<Heroe> {
    return this.httpCliente.get<Heroe>(`${this.urlApi}/${id}`);
  }

  // Post heroe
  postHeroe(heroe: HeroeData): Observable<Heroe> {
    return this.httpCliente.post<Heroe>(this.urlApi, heroe);
  }

  // Put heroe
  putHeroe(id:number, heroe: HeroeData): Observable<Heroe> {
    return this.httpCliente.put<Heroe>(`${this.urlApi}/${id}`, heroe);
  }

  // Delete heroe
  deleteHeroe(id: number): Observable<Heroe> {
    return this.httpCliente.delete<Heroe>(`${this.urlApi}/${id}`);
  }

}
