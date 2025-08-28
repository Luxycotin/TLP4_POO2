import { Material } from "./Material.js";

export class Libro extends Material {
  paginas: number;
  genero?: string;

  constructor(
    id: string,
    titulo: string,
    autor: string,
    paginas: number,
    genero?: string
  ) {
    super(id, titulo, autor);
    this.paginas = paginas;
    this.genero = genero;
  }

  override mostrarInfo(): string {
    const g = this.genero ? ` | Género: ${this.genero}` : "";
    return `📘 Libro [${this.id}] "${this.titulo}" de ${this.autor} | Páginas: ${this.paginas}${g} | Disponible: ${this.disponible}`;
  }
}
