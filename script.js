

function funcBotao() {
  document.getElementById("digite").innerText = "Frase limpinha :)";
  document.getElementById("digite").style.color = "#2BDBA1";
  document.getElementById("text").style.borderColor = "#2BDBA1";
  document.getElementById("botao").style.background = "#2BDBA1";
  document.getElementById("botao").innerText = "Limpar outra frase";
}

function countText() {
  let text = document.getElementById("text").value;
  let qCarac = text.length;
  document.getElementById('characters').innerText = qCarac;
}



function limpar() {
  let listaPalavroes = ["merda", "porra", "corno", "corna", "puto", "puta", "caralho", "idiota", "viado"];
  let juncao = new RegExp(listaPalavroes.join("|"), "gi");
  texto = document.getElementById("text").value;
  resultado = texto.replace(juncao, "***");
  document.getElementById("text").value = resultado;
}

function countPalavroes() {
  let listaPalavroes = ["merda", "porra", "corno", "corna", "puto", "puta", "caralho", "idiota", "viado"];
  let juncao = new RegExp(listaPalavroes.join("|"), "gi");
  var str = document.getElementById("text").value;
  var count = (str.match(juncao) || []).length;
  console.log(count);
  document.getElementById("res").innerText = count + " palavrões ";
  document.getElementById("countPalavroes").style.display = "block";
  return (count);

}

function acao() {

  if (countPalavroes() == 0) {
    alert("Sua frase já está limpinha ;)");
    document.location.reload(true);
  }
  else {
    countPalavroes();
    if (document.getElementById("botao").innerText === "Limpar outra frase") {
      document.location.reload(true);
    }
    else {
      limpar();
    }

    funcBotao();

  }
}
