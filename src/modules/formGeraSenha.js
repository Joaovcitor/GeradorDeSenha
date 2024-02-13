import geraSenha from "./geradores";

const senhaGerada = document.querySelector(".senha-gerada");
const qtdcaracteres = document.querySelector(".qtd");
const chkMaiusculas = document.querySelector(".chk-maiusculas");
const chkMinusculas = document.querySelector(".chk-minusculas");
const chkNumeros = document.querySelector(".chk-numeros");
const chkSimbolos = document.querySelector(".chk-simbolos");
const bntGera = document.querySelector(".gerar-senha");

export default () => {
  bntGera.addEventListener("click", () => {
    console.log(chkMaiusculas.checked);
    senhaGerada.innerHTML = gera()
    
  });
};

function gera() {
  const senha = geraSenha(
    qtdcaracteres.value,
    chkMaiusculas.checked,
    chkMinusculas.checked,
    chkNumeros.checked,
    chkSimbolos.checked
  );
  return senha
}
