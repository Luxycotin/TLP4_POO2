import { Libro } from "./models/Libro.js";
import { Revista } from "./models/Revista.js";
import { Usuario } from "./models/Usuario.js";

const libro1 = new Libro("L-001", "El Principito", "A. de Saint-Exupéry", 120, "Fábula");
const libro2 = new Libro("L-002", "Clean Code", "Robert C. Martin", 464);
const revista1 = new Revista("R-001", "National Geographic", "Varios", 309);

const usuario = new Usuario("U-001", "Ana Pérez");

console.log("=== Info de materiales (polimorfismo) ===");
[libro1, libro2, revista1].forEach((m) => console.log(m.mostrarInfo()));

console.log("\n=== Préstamos ===");
usuario.prestar(libro1);
usuario.prestar(revista1);

usuario.prestar(libro1);

console.log("\n=== Listado de prestados ===");
usuario.mostrarPrestados();

console.log("\n=== Última prestación ===");
usuario.mostrarUltimaPrestacion();
