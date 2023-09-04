import ITarefa from "../tarefas/ITarefa";
import Tarefa from "../tarefas/Tarefa";
import IListaDeTarefas from "./IListaDeTarefas";

export default class ListaDeTarefas implements IListaDeTarefas {
  private _tarefas: ITarefa[];

  constructor() {
    this._tarefas = [];
  }

  adicionarTarefa(descricaoTarefa: string): ITarefa {
    const novaTarefa = new Tarefa(descricaoTarefa);
    this._tarefas.push(novaTarefa);
    return novaTarefa;
  }

  listarTarefas(): string {
    return this._tarefas.join("\n");
  }

  get tarefas(): ITarefa[] {
    return [...this._tarefas];
  }
}
