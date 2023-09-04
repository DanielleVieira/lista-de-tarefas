import ListaDeTarefas from "./listasDeTarefas/ListaDeTarefas";
import ListaPrioritaria from "./listasDeTarefas/ListaPrioritaria";
import { Prioridade } from "./tarefas/Prioridade";

class Main {
  static main() {
    const listaDeTarefas = new ListaDeTarefas();
    const listaPrioritaria = new ListaPrioritaria();

    listaDeTarefas.adicionarTarefa("Atividade de carreiras");
    listaDeTarefas.adicionarTarefa("Projeto TS").marcarConcluida();
    listaDeTarefas.adicionarTarefa("Aula de React");

    listaPrioritaria
      .adicionarTarefaPrioritaria("Atividade to-do-list", Prioridade.ALTA)
      .marcarConcluida();
    listaPrioritaria.adicionarTarefaPrioritaria(
      "Live terça as 19h",
      Prioridade.MEDIA
    );
    listaPrioritaria
      .adicionarTarefaPrioritaria("Revisão", Prioridade.BAIXA)
      .marcarConcluida();

    console.log("=== Lista de Tarefas ===");
    console.log(listaDeTarefas.listarTarefas());
    console.log("=== Tarefas Concluídas ===");
    console.log(listaDeTarefas.listarTarefasConcluidas());
    console.log("=== Tarefas Pendentes ===");
    console.log(listaDeTarefas.listarTarefasPendentes());
    console.log("\n");
    console.log("=== Lista de Prioridades ===");
    console.log(listaPrioritaria.listarTarefas());
    console.log("=== Tarefas Concluídas ===");
    console.log(listaPrioritaria.listarTarefasConcluidas());
    console.log("=== Tarefas Pendentes ===");
    console.log(listaPrioritaria.listarTarefasPendentes());
  }
}

Main.main();
