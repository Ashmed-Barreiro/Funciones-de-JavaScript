import { Alumno } from "./Alumno.js";
// Clase GestorAlumnos
export class GestorAlumnos {
    constructor(alumnos = []) {
        this.alumnos = alumnos.map(alumno => new Alumno(
            alumno.nombre,
            alumno.apellidos,
            alumno.fechaNacimiento,
            alumno.email,
            alumno.ciclo,
            alumno.notas
        ));
    }


    agregarAlumno(){
        const nombre = prompt("Nombre del alumno:");
        const apellidos = prompt("Apellidos del alumno:");
        const fechaNacimiento = prompt("Fecha de nacimiento (YYYY-MM-DD):");
        const email = prompt("Email:");
        const ciclo = prompt("Ciclo (DAM o DAW):");
        const notas = prompt("Introduce las notas separadas por comas:").split(",").map(n => parseFloat(n.trim()));
        const nuevoAlumno = new Alumno(nombre, apellidos, fechaNacimiento, email, ciclo, notas);
        this.alumnos.push(nuevoAlumno);
    }

    buscarAlumno(alumnoBuscar){
        return this.alumnos.find(alumno => `${alumno.nombre} ${alumno.apellidos}`.toLowerCase === alumnoBuscar.toLowerCase() )
    }

    eliminarAlumno(nombreCompleto) {
        const index = this.alumnos.findIndex(alumno => `${alumno.nombre} ${alumno.apellidos}`.toLowerCase() === nombreCompleto.toLowerCase());
        if (index !== -1) {
            this.alumnos.splice(index, 1);
        }
    }

    mostrarAlumnosOrdenados(){
        return this.alumnos.sort((a,b) => b.getMedia()-a.getMedia());
    }

    listarAlumnos(){
        let lista = [...this.alumnos].sort((a, b) => (a.nombre).localeCompare(b.nombre));
        return lista
    }
}