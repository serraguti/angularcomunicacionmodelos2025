import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { Comic } from '../../models/comic';
import { ServiceComics } from '../../services/service.comics';

@Component({
  selector: 'app-libreria',
  standalone: false,
  templateUrl: './libreria-component.html',
  styleUrl: './libreria-component.css',
})
export class LibreriaComponent implements OnInit{
  @ViewChild("cajatitulo") cajaTitulo!: ElementRef;
  @ViewChild("cajadescripcion") cajaDescripcion!: ElementRef;
  @ViewChild("cajaimagen") cajaImagen!: ElementRef;
  public comics!: Array<Comic>;
  public comicFavorito!: Comic;

  constructor(private _service: ServiceComics) {}

  ngOnInit(): void {
    this.comics = this._service.getComics();
  }

  createComic(): void {
    let titulo = this.cajaTitulo.nativeElement.value;
    let descripcion = this.cajaDescripcion.nativeElement.value;
    let imagen = this.cajaImagen.nativeElement.value;
    let comicNew = new Comic(titulo, imagen, descripcion);
    this.comics.push(comicNew);
  } 

  seleccionarFavorito(favorito: Comic): void{
    this.comicFavorito = favorito;
  }

  deleteComic(index: number){
    this.comics.splice(index, 1);
  }
}
