let filtro = document.querySelector(".table_filter");

filtro.addEventListener("input", function(){

  let pacientes = document.querySelectorAll(".paciente");
  if( this.value.length > 0) {
    for(let i = 0; i < pacientes.length; i++){
      let paciente = pacientes[i];
      let tdNome = paciente.querySelector(".info-nome");
      let nome = tdNome.textContent;
      let expressao = new RegExp(this.value,"i"); //Função usado para sistemas de busca F3 - "i" = Uppercase insensitive (Busca por Maiusculo ou Min)
  
      if(expressao.test(nome)){
        paciente.classList.remove("invisible");
      } else {
        paciente.classList.add("invisible");
      }
    }
  } else {
    for(let i = 0; i < pacientes.length; i++){
      let paciente = pacientes[i];
      paciente.classList.remove("invisible");
    }
  }
})