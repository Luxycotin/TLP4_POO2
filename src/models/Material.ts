import type { IBibliotecaItem } from "../interfaces/IBibliotecaItem.js";

export abstract class Material implements IBibliotecaItem {
  protected _id: string;
  public titulo: string;
  public autor: string;

  // Encapsulamiento de disponibilidad
  private _disponible = true;

  constructor(id: string, titulo: string, autor: string) {
    this._id = id;
    this.titulo = titulo;
    this.autor = autor;
  }

  get id(): string {
    return this._id;
  }

  get disponible(): boolean {
    return this._disponible;
  }

  set disponible(valor: boolean) {
    this._disponible = valor;
  }

  abstract mostrarInfo(): string;
}
