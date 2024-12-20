import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HeroeData } from '../../data/heroe-data';
import { HeroeServiceService } from '../../services/heroe-service.service';

@Component({
  selector: 'app-heroe',
  imports: [FormsModule],
  templateUrl: './heroe.component.html',
  styleUrl: './heroe.component.css'
})
export class HeroeComponent {
  heroeService = inject(HeroeServiceService)
  nuevoHeroe: HeroeData = {
    nombre: '',
    poder: '',
    universo: '',
    debilidad: '',
    urlImagen: ''
  }

  constructor() { }

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
        
        
      } else {
        
      }
    })
  }

}
