import { Component, Input, OnInit } from '@angular/core';
import { Prioridade, Tarefa } from 'src/app/models/Tarefa';

@Component({
  selector: 'app-lista-de-tarefas',
  templateUrl: './lista-de-tarefas.component.html',
  styleUrls: ['./lista-de-tarefas.component.css']
})
export class ListaDeTarefasComponent implements OnInit {

  tarefas:Tarefa[] = [
    {feita:false,
    descricao:"Mudar para Angular",
    prioridade:Prioridade.Alta},
    {feita:false,
      descricao:"Estudar Angular",
      prioridade:Prioridade.Media},
    {feita:false,
      descricao:"Iniciar Java",
      prioridade:Prioridade.Media}      
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
