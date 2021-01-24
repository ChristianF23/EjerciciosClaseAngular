import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-par-impar',
  templateUrl: './par-impar.component.html',
  styleUrls: ['./par-impar.component.css']
})
export class ParImparComponent implements OnInit {

  mensaje: string;

  @Input() valor: number;
  @Output() parImpar = new EventEmitter<string>();

  calculoParImpar(_valor?:number){
    if(_valor) this.valor = _valor;
      if (this.valor % 2 == 0)
        this.mensaje = `La suma de las balotas es: ${this.valor} y es un número Par`;
      else
        this.mensaje = `La suma de las balotas es: ${this.valor} y es un número Impar`;
    this.parImpar.emit(this.mensaje);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
