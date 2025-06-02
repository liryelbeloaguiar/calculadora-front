import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-calculadora',
  imports: [FormsModule, CommonModule],
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.scss'
})
export class CalculadoraComponent {

  num1: number = 0;
  num2: number = 0;
  resultadoSoma: number = 0;
  resultadoSubtracao: number = 0;

  calcular() {
    this.resultadoSoma = this.num1 + this.num2;
    this.resultadoSubtracao = this.num1 - this.num2;
  }
}
