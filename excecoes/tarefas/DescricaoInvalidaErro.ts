export default class DescricaoInvalidaErro extends Error {
  constructor(mensagem: string) {
    super(mensagem);
    this.name = "DescricaoInvalidaErro";
  }
}
