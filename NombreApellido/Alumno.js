// Clase Alumno
const ponderacionesDAM=[0.3, 0.2, 0.3, 0.2]
const ponderacionesDAWe=[0.2, 0.4, 0.2, 0.2]

export class Alumno {
    #media;  
    constructor(nombre, apellidos, fechaNacimiento, email, ciclo, notas){
        this.nombre = nombre
        this.apellidos = apellidos
        this.fechaNacimiento = new Date(fechaNacimiento)
        this.email = email
        this.ciclo = ciclo
        this.notas = notas
        this.#media = this.calcularMedia();
    }
    

    valueOf(){
       return this.#media
    }

    getMedia(){
        return this.#media
    }

    calcularMedia() {
        const ponderaciones = this.ciclo === "DAM" ? ponderacionesDAM : ponderacionesDAWe;
        return this.notas.reduce((total, nota, i) => total + nota * ponderaciones[i], 0).toFixed(2);
    }
    

    toString(){
        return `${this.nombre} ${this.apellidos} ${this.fechaNacimiento} ${this.email} ${this.ciclo} [${this.notas}] <b>${this.#media}</b>`
     }
    }