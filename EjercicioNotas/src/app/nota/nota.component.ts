import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nota',
  templateUrl: './nota.component.html',
  styleUrls: ['./nota.component.css']
})
export class NotaComponent implements OnInit {

  nombre: string;
  edad: number;
  promedio: number;
  notas: number[];
  valor: number = 2;
  currentClasses: {};
  canSave: true;
  isUnchanged: true;
  isSpecial: true;

  constructor() { 
    this.nombre = "Pedro Gaona";
    this.edad = 23;
    this.notas = [5, 3, 7, 9, 10];
  }

  calcularPromedio(){
    //this.promedio = this.notas.reduce((a, b) => a + b, 0)
    let suma: number = 0;
    let promedio: number;
    for (let i = 0; i < this.notas.length; i++){
      suma += this.notas[i];
    }
    promedio = suma / this.notas.length;
    this.promedio = promedio;
  }

  ngOnInit(): void {
  }

  setCurrentClasses(){
    this.currentClasses = {
      savable: this.canSave,
      modified: !this.isUnchanged,
      special: this.isSpecial
    };
  }

}
