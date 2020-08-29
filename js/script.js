var azul = document.getElementById('btnAzul');
var vermelho = document.getElementById('btnVermelho');
var verde = document.getElementById('btnVerde');
var body = document.querySelector('body');
var imagem = document.getElementById('imgdoproduto'); 

vermelho.onclick = function vermelho(){
 body.className = "vermelho";
imagem.src = "img/cadeira_1.png" 
}

azul.onclick = function azul(){
 body.className = "azul";
 imagem.src = "img/cadeira_2.png" 
}

verde.onclick = function verde(){
 body.className = "verde";
 imagem.src = "img/cadeira_3.png" 
}


function abrir(){
	janela = window.open('','creditos',"width=400, height=100, top=200, left=450, resizable=no, fullscreen=no");
	
	janela.document.write("DESENVOLVIMENTO DE SOFTWARE PARA WEB</br> Universidade Federal do Ceará - Campus de Russas</br>Equipe: Clara Lima e Israely Lima");
	
	janela.document.getElementsByTagName("BODY")[0].style.backgroundColor = "black";
	
	janela.document.getElementsByTagName("BODY")[0].style.color = "red";
}


// ADICIONAR DEPOIMENTO

function adcDepoimento(){

var nome = document.getElementById('inputNome').value;
var mensagem = document.getElementById('inputMensagem').value;

var conteudo  = document.getElementById("conteudodepoimento").innerHTML;
  conteudo = "" + conteudo + "<p>" + nome + ": " + mensagem +" <button class='btnexcluir' onclick='rmvDepoimento(this);'>Excluir</button></p>";

document.getElementById("conteudodepoimento").innerHTML = conteudo;

}


function rmvDepoimento(t){
	t.parentNode.remove();
}