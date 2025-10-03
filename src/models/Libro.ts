import { Material } from "./Material.js";


class Libro extends Material {

  public paginas: number;
  public genero?: string;

  contructor (id: number, titulo: string, autor: string, paginas: number, genero?: string ) {
  
   super(id, titulo, autor);
    this.paginas = paginas;
    this.genero = genero;
  }  

  override mostrarInfo(): void{
    
    console.log(
      `Libro #${this.id}: "${this.titulo}" de ${this.autor} — ${this.paginas} págs` +
      (this.genero ? ` — Género: ${this.genero}` : "") +
      `. Disponible: ${this.disponible ? "Sí" : "No"}`
    );
  }




}