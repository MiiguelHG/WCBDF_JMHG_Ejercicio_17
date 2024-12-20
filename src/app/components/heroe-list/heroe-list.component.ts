import { Component, inject } from '@angular/core';
import { HeroeServiceService } from '../../services/heroe-service.service';
import { Heroes } from '../../data/heroes-entity';
import { Heroe } from '../../data/heroe-entity';
import { FormsModule } from '@angular/forms';
import { HeroeData } from '../../data/heroe-data';

@Component({
  selector: 'app-heroe-list',
  imports: [FormsModule],
  templateUrl: './heroe-list.component.html',
  styleUrl: './heroe-list.component.css'
})
export class HeroeListComponent {
  heroeService = inject(HeroeServiceService)
  heroeslist: any[] = [];

  currentHeroe: HeroeData = {
    id: 0,
    nombre: '',
    poder: '',
    universo: '',
    debilidad: '',
    urlImagen: ''
  };

  nuevoHeroe: HeroeData = {
    nombre: '',
    poder: '',
    universo: '',
    debilidad: '',
    urlImagen: ''
  }

  constructor() {
    this.CargarHeroes();
  }

  EliminarHeroe(id: number) {
    this.heroeService.deleteHeroe(id).subscribe((data) => {
      if (data.status == 1) {
        this.CargarHeroes();
      } else {
        alert(data.message);
      }
    });
  }

  // Obtener heroe por id
  ObtenerHeroe(id: number) {
    this.heroeService.getHeroeById(id).subscribe((data) => {
      if (data.status == 1) {
        this.currentHeroe = data.data;
      } else {
        alert(data.message);
      }
    })
  }

  // Actualiar heroe
  ActualizarHeroe(id: number) {
    this.heroeService.putHeroe(id , this.currentHeroe).subscribe((data) => {
      if (data.status == 1) {
        this.CargarHeroes();
      } else {
        alert(data.message);
      }
    });
  }

  // Crear heroe
  CrearHeroe() {
    this.heroeService.postHeroe(this.nuevoHeroe).subscribe((data) => {
      if (data.status == 1) {
        this.nuevoHeroe = {
          nombre: '',
          poder: '',
          universo: '',
          debilidad: '',
          urlImagen: ''
        }
        this.CargarHeroes();
      } else {
        alert(data.message);
      }
    })
  }

  CargarHeroes() {
    this.heroeService.getAllHeroes().subscribe((data) => {
      this.heroeslist = data.data;
    });
  }
}
