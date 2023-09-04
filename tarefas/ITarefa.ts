import { Prioridade } from "./Prioridade";

export default interface Itarefa {
  marcarConcluida(): void;
  toString(): string;
  definirPrioridade(novaPrioridade: Prioridade): void;
}
