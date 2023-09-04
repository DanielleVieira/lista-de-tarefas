import ValidacaoTarefas from "../validacoes/tarefas/ValidacaoTarefas";
import ITarefa from "./ITarefa";
import { Prioridade } from "./Prioridade";

export default class Tarefa implements ITarefa {
  private _descricao: string;
  private _concluida: boolean;
  private _prioridade: Prioridade;

  constructor(
    descricao: string,
    prioridade: Prioridade = Prioridade.NAO_DEFINIDA
  ) {
    ValidacaoTarefas.validaDescricao(descricao);
    this._descricao = descricao;
    this._prioridade = prioridade;
    this._concluida = false;
  }

  marcarConcluida(): void {
    this.concluida = true;
  }

  toString(): string {
    return `Tarefa: ${this.descricao}, Status: ${
      this.concluida ? "(Concluída)" : "(Pendente)"
    }`;
  }

  toStringComPrioridade(): string {
    return `${this.toString()}, Prioridade: ${this.prioridade}`;
  }

  definirPrioridade(novaPrioridade: Prioridade): void {
    this.prioridade = novaPrioridade;
  }

  exibirStatus(): string {
    return this.concluida ? "CONCLUÍDA" : "PENDENTE";
  }

  get descricao(): string {
    return this._descricao;
  }

  set descricao(novaDescricao: string) {
    ValidacaoTarefas.validaDescricao(novaDescricao);
    this._descricao = novaDescricao;
  }

  get prioridade(): string {
    return this._prioridade;
  }

  set prioridade(novaPrioridade: Prioridade) {
    this._prioridade = novaPrioridade;
  }

  get concluida(): boolean {
    return this._concluida;
  }

  set concluida(status: boolean) {
    this._concluida = status;
  }
}
