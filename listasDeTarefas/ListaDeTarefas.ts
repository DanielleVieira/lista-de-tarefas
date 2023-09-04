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

  private listarTarefasCondicional(condicao: string): string {
    return this._tarefas
      .filter((tarefa) => tarefa.exibirStatus() === condicao.toUpperCase())
      .join("\n");
  }

  listarTarefasConcluidas(): string {
    return this.listarTarefasCondicional("CONCLUÍDA");
  }
  listarTarefasPendentes(): string {
    return this.listarTarefasCondicional("PENDENTE");
  }

  get tarefas(): ITarefa[] {
    return [...this._tarefas];
  }
}
