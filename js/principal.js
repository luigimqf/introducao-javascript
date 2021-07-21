let titulo = document.querySelector(".titulo");

let pacientes = document.querySelectorAll(".paciente");

function printTable(){

  pacientes.forEach(paciente => {

    let tdImc = paciente.querySelector(".info-imc");
    let peso = paciente.querySelector(".info-peso").textContent;
    let altura = paciente.querySelector(".info-altura").textContent;

    const erros = verificaValidade(peso, altura);

    // if (isValid) { 
    if ( erros.length === 0 ) {
      let imc = calcularImc(peso, altura, tdImc)
      tdImc.textContent = imc;
    } else {
      paciente.classList.add("paciente-invalido")
    }
  })
}

const form = document.querySelector("#form_adicionar");
const tabela = document.querySelector("#tabela-pacientes");

form.addEventListener("submit", function(event){
  let pacienteData = pegaValorForm(event);

  const pacienteTr = document.createElement("tr");
  pacienteTr.classList.add("paciente");

  const fields = Object.keys(pacienteData);


  fields.forEach (field => {
    let tdClass = pegaClasse(field);
    let tdValue = pacienteData[field];

    insertInTable(pacienteTr, tdClass, tdValue);
  })


  let erros = verificaValidade(pacienteData.peso, pacienteData.altura, pacienteData.nome, pacienteData.gordura);

  if (erros.length === 0) {
    let imc = calcularImc(pacienteData.peso, pacienteData.altura);
    insertInTable(pacienteTr, "info-imc", imc)
    tabela.appendChild(pacienteTr);
    printTable();
  } else {   
    mensagemErro(erros)
  }
})


printTable()
