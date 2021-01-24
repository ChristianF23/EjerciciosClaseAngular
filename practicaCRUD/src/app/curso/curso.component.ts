import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {

  curso: {
    nombre: string,
    descripcion: string,
    duracion: number,
    costo: number
  };
  cursos= Array();

  constructor() { 
    this.curso = {
      nombre: null,
      descripcion: null,
      duracion: 0,
      costo: 0
    };
    this.cursos = [
      {
        nombre: 'Java', descripcion: 'Curso Nivel I', duracion: 24, costo: 15
      },
      {
        nombre: 'Oracle', descripcion: 'Curso Nivel I', duracion: 24, costo: 12
      },
      {
        nombre: 'PHP', descripcion: 'Curso Nivel I', duracion: 24, costo: 10
      },
      {
        nombre: 'Java 2', descripcion: 'Curso Nivel I', duracion: 42, costo: 18
      }
    ]

  }

  ngOnInit(): void {
  }

  cantCursos() {
    return this.cursos.length > 0;
  }

  registrarCurso() {
    for (let i = 0; i < this.cursos.length; i++){
      if (this.cursos[i].nombre == this.curso.nombre) {
        alert('El curso ya está registrado');
        return;
      }
    }
    this.cursos.push({nombre:this.curso.nombre,
                      descripcion: this.curso.descripcion,
                      duracion: this.curso.duracion,
                      costo: this.curso.costo });
    this.curso.nombre = null;
    this.curso.descripcion = null;
    this.curso.duracion = 0;
    this.curso.costo = 0;
  }

  selectCurso(curso){
    this.curso.nombre = curso.nombre;
    this.curso.descripcion = curso.descripcion;
    this.curso.duracion = curso.duracion;
    this.curso.costo = curso.costo;
  }

  borrarCurso(curso){
    for(let i = 0; i<this.cursos.length; i++){
      if (this.cursos[i].nombre == curso.nombre){
        this.cursos.splice(i, 1);
        return;
      }
    }
  }

  actualizarCurso() {
    for (let i = 0; i < this.cursos.length; i++){
      if (this.cursos[i].nombre == this.curso.nombre) {
        this.cursos[i].descripcion = this.curso.descripcion;
        this.cursos[i].duracion = this.curso.duracion;
        this.cursos[i].costo = this.curso.costo;        
      }
    }
    this.curso.nombre = null;
    this.curso.descripcion = null;
    this.curso.duracion = 0;
    this.curso.costo = 0;
  }

}
