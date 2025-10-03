export interface IBibliotecItem {
  readonly id: number;
  titulo: string;
  autor: string;
  mostrarInfo(): void;
}