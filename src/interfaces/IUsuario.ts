import type { Material } from "../models/Material.js";

export interface IUsuario {
  id: string;
  nombre: string;
  prestar(material: Material): void;
}
