import ITarefa from "../tarefas/ITarefa";
import { Prioridade } from "../tarefas/Prioridade";
import ListaDeTarefas from "./ListaDeTarefas";

export default class ListaPrioritaria extends ListaDeTarefas {
  adicionarTarefaPrioritaria(
    descricao: string,
    prioridade: Prioridade
  ): ITarefa {
    const novaTerefa = super.adicionarTarefa(descricao);
    novaTerefa.definirPrioridade(prioridade);
    return novaTerefa;
  }

  listarTarefas(): string {
    return super.tarefas
      .map(
        (tarefa) =>
          `${tarefa.toString()}, Prioridade: ${tarefa.exibirPrioridade()}`
      )
      .join("\n");
  }
}
