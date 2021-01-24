import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'loteria';

  valor1: number;
  valor2: number;
  valor3: number;
  valor4: number;
  valor5: number;
  suma : number;
  numeroGanador: string;
  mensaje: string;

  constructor() {
    this.valor1 = -1;
    this.valor2 = -1;
    this.valor3 = -1;
    this.valor4 = -1;
    this.valor5 = -1;
    this.numeroGanador = "";
    this.suma = 0;
    this.jugar();
  }

  obtenerNumero(){
    let numero: number;
    numero = (Math.trunc(Math.random() * 9) - 1) + 1;
    if (numero < 0) numero = 0;
    return numero;
  }

  jugar():void {
    this.valor1 = this.obtenerNumero();
    this.valor2 = this.obtenerNumero();
    this.valor3 = this.obtenerNumero();
    this.valor4 = this.obtenerNumero();
    this.valor5 = this.obtenerNumero();
    this.numeroGanador = `El número ganador es: ${this.valor1} ${this.valor2} ${this.valor3} ${this.valor4} ${this.valor5}`;
    this.suma = this.valor1 + this.valor2 + this.valor3 + this.valor4 + this.valor5;
  }

  llamarParImpar(mensaje){
    this.mensaje = "Padre: " + mensaje;
  }
}
