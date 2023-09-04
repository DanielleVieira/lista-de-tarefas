import DescricaoInvalidaErro from "../../excecoes/tarefas/DescricaoInvalidaErro";
import { Prioridade } from "../../tarefas/Prioridade";

export default abstract class ValidacaoTarefas {
  private static validaString(str: string, erro: Error) {
    if (!str || typeof str !== "string") {
      throw erro;
    }
  }

  static validaDescricao(descricao: string): void {
    this.validaString(
      descricao,
      new DescricaoInvalidaErro("Descricao Inválida")
    );
  }
}
