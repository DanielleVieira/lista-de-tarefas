import ITarefa from "../tarefas/ITarefa";
import ListaDeTarefas from "./ListaDeTarefas";

export default interface IListaDeTarefas {
  adicionarTarefa(descricaoTarefa: string): void;
  listarTarefas(): string;
}
