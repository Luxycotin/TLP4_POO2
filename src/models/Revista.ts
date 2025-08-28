import { Material } from "./Material.js";

export class Revista extends Material {
  edicion: number;

  constructor(id: string, titulo: string, autor: string, edicion: number) {
    super(id, titulo, autor);
    this.edicion = edicion;
  }

  override mostrarInfo(): string {
    return `📗 Revista [${this.id}] "${this.titulo}" de ${this.autor} | Edición: ${this.edicion} | Disponible: ${this.disponible}`;
  }
}
