import type { IUsuario } from "../interfaces/IUsuario.js";
import { Material } from "./Material.js";

export class Usuario implements IUsuario {
  id: string;
  nombre: string;

  // Lista privada de materiales prestados
  #prestados: Material[] = [];

  // Non-null assertion: se asigna al prestar por primera vez
  ultimaPrestacion!: Date;

  constructor(id: string, nombre: string) {
    this.id = id;
    this.nombre = nombre;
  }

  prestar(material: Material): void {
    if (!material.disponible) {
      console.log(`❌ "${material.titulo}" no está disponible.`);
      return;
    }
    material.disponible = false;
    this.#prestados.push(material);
    this.ultimaPrestacion = new Date();
    console.log(`✅ ${this.nombre} prestó "${material.titulo}".`);
  }

  mostrarPrestados(): void {
    if (this.#prestados.length === 0) {
      console.log(`(sin materiales prestados)`);
      return;
    }
    console.log(`Materiales prestados por ${this.nombre}:`);
    this.#prestados.forEach((m, i) => {
      console.log(`  ${i + 1}. ${m.mostrarInfo()}`);
    });
  }

  mostrarUltimaPrestacion(): void {
    if (!this.ultimaPrestacion) {
      console.log(`Aún no hay préstamos registrados para ${this.nombre}.`);
      return;
    }
    console.log(
      `Última prestación de ${this.nombre}: ${this.ultimaPrestacion.toLocaleString()}`
    );
  }
}
