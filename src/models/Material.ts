import type { IBibliotecItem } from "../interfaces/IBibliotecaItem.js";

export abstract class Material implements IBibliotecItem {

  public readonly id: number;
  public titulo: string;
  public autor: string;


protected _disponible: boolean;

constructor (id: number, titulo: string, autor :string, _disponible: true ) {

  this.id = id,
  this.titulo = titulo,
  this.autor = autor,
  this._disponible = _disponible
}


get disponible(): boolean {
  return this._disponible

}

set disponible(valor: boolean) {
 this._disponible = valor
}

abstract mostrarInfo(): void;

}