
// Função tradicional sem parâmetro
function minhaFuncaoSemParametro() {
  console.log("Minha função tradicional sem parâmetro foi chamada!");
}
// Função tradicional com parâmetro e retorno de valor
function minhaFuncaoComParametro(numero) {
  return numero * 2;
}
// Arrow function com parâmetro e retorno de valor
const minhaFuncaoComArrow = (numero) => numero * 3;
// Chamando as funções
document.querySelector("#minhaFuncaoSemParametro").onclick = () => {
  minhaFuncaoSemParametro();
};
document.querySelector("#minhaFuncaoComParametro").onclick = () => {
  console.log(minhaFuncaoComParametro(10));
};
document.querySelector("#minhaFuncaoComArrow").onclick = () => {
  console.log(minhaFuncaoComArrow(10));
};
