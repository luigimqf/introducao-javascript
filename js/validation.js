function verificaValidade (peso, altura, nome, gordura) {

  let erros = [];


  if(gordura.length === 0){
    erros.push("Gordura invalida")
  }

  if (nome.length === 0){
    erros.push("Nome em branco")
  }

  if (peso <= 0 || peso >= 300) {
    erros.push("Peso é invalido")
  }

  if (altura <= 0 || altura >= 3) {
    erros.push("Altura é invalida")
  }

  return erros;
}

function mensagemErro(erros){
  let ul = document.querySelector("#mensagens_erro")
  ul.innerHTML = ""
  // if(ul.children.length >= 2) return
  erros.forEach(function(erro){
    let li = document.createElement("li");
    li.textContent = erro;
    ul.appendChild(li);
  })

}