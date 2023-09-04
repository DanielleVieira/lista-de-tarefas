import ITarefa from "../tarefas/ITarefa";
import Tarefa from "../tarefas/Tarefa";
import IListaDeTarefas from "./IListaDeTarefas";

export default class ListaDeTarefas implements IListaDeTarefas {
  private tarefas: ITarefa[];

  constructor() {
    this.tarefas = [];
  }

  adicionarTarefa(descricaoTarefa: string): void {
    this.tarefas.push(new Tarefa(descricaoTarefa));
  }

  listarTarefas(): string {
    return this.tarefas.join("\n");
  }
}
