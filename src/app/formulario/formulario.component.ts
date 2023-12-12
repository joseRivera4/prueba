import { Component,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-formulario',
 
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {

@Output()  resultadoSuma = new EventEmitter<number>();
  operandoA: number ;
  operandoB: number ;


  suma(): void {
    let resultado= this.operandoA + this.operandoB;
    this.resultadoSuma.emit(resultado);
  }
}
