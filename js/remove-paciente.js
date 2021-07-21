let table = document.querySelector("table");

table.addEventListener("dblclick", function(event){
  event.target.parentNode.classList.add("fadeOut");

  setTimeout(function(){
    event.target.parentNode.remove();
  },500);
 

  // parentNode = Pai do alvo 
});