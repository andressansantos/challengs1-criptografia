
function ativaBotao(){
  //seleciona o imput
  let texto = document.querySelector('#input-texto');
  const result =document.querySelector('#input-texto');
  

  if (texto.value== ''){
    alert("Campo vazio ou inválido. Digite novamente");
  } 

  const regex = new RegExp("^[0-9a-zA-Z\b]+$");
  var teste = false    

  if(!regex.test(texto.value)){
     teste = true
     if(teste == true){
        alert("Digite novamente");
     }
   }else{
    cripto();
    //console.log(cripto())

   }
}


function cripto(){
  let texto = document.querySelector('#texto')
  let resultado = document.querySelector('#msg')
  let textoValor = ''
  //bloqueioTexto(texto.value.toLowerCase())
  let textoResultante = textoValor
    .replace(/[i\í]/gi, 'imes')
    .replace(/[e\é\ê]/gi, 'enter')
    .replace(/[a\á\â\ã]/gi, 'ai')
    .replace(/[o\ó\ô]/gi, 'ober')
    .replace(/[u\ú]/gi, 'ufat')
  resultado.value = textoResultante
 // texto.value = ''
  document.getElementById("msg").value = resultado;
 // alert(resultado)
}



function descriptarDados (){
    let texto =  document.querySelector('#input-texto')

    if (texto.value == ''){
        alert("Campo vazio ou inválido. Digite novamente");
    }
    navigator.clipboard.writeText(copia.value);
    //return(copia);
    alert("TEXTO COPIADO!");
    limpa();
}


/*
function bloqueioTexto(texto){
  //return texto.replace(/[1\\!\¹\'2'\@\²\'3'\#\³\'4'\$\£\'5'\%\¢\'6'\¨\¬\'7'\&\'8'\*\'9'\(\'0'\´\)\-\_\=\+\§\`\[\{\ª\~\^\}\º\|\,\<\.\>\;\:\\\\/\?\°\"\']/g, '')
  var char = String.fromCharCode(texto.keyCode);
  
  console.log(char);
    var pattern = '[a-zA-Z0-9]';
    if (char.match(pattern)) {
      return true;
  }
}

*/


function copiarTexto(){

    let copiarTexto = document.querySelector('#msg')


    /*
    if(copiarTexto.value == ''){

    }
*/
return copiarTexto
}
