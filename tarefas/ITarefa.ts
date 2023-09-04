import { Prioridade } from "./Prioridade";

export default interface Itarefa {
  marcarConcluida(): void;
  toString(): string;
  toStringComPrioridade(): string;
  definirPrioridade(novaPrioridade: Prioridade): void;
  exibirStatus(): string;
}
