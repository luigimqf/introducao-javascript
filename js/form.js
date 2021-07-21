
//Objeto com as chaves do Paciente
function pegaClasse(field){
  const tdClassNames = {
    nome: "info-nome",
    peso: "info-peso",
    altura: "info-altura",
    gordura: "info-gordura",
  }
  return tdClassNames[field]
}

//Pega as chaves e valores de Paciente Novo
function pegaValorForm(event){
  event.preventDefault()
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);
  
  return data
}

//Adiciona Paciente Na Tabela
function insertInTable(tr, tdClass, tdValue){
  let td = document.createElement("td");
  td.textContent = tdValue;
  td.classList.add(tdClass);
  tr.appendChild(td);
}