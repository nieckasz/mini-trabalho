// Seleção dos elementos HTML
const notaInput = document.getElementById('notaInput');
const adicionarBtn = document.getElementById('adicionarBtn');
const listaNaoUrgente = document.getElementById('listaNaoUrgente');
const listaUrgente = document.getElementById('listaUrgente');
const apagarTudoBtn = document.getElementById('apagarTudoBtn');
const checkboxUrgente = document.getElementById('checkboxUrgente');
const removerUltimaNaoUrgente = document.getElementById('removerUltimaNaoUrgente');
const removerUltimaUrgente = document.getElementById('removerUltimaUrgente');
const apagarTudoBtnNao = document.getElementById('apagarTudoBtnNao')


const cores = ["azul", "verde", "roxo"];
let indiceCorNaoUrgente = 1;
let indiceCorUrgente = 1;


adicionarBtn.addEventListener('click', () => {
    const texto = notaInput.value.trim();
    if (texto === "") {
        alert("Digite uma nota!");
              return;
    }

    const urgente = checkboxUrgente.checked;

   let corNota;
       if (urgente) {
    const notasAtuais = listaUrgente.querySelectorAll('li').length;
    corNota = cores[notasAtuais % cores.length];
}       else {
      const notasAtuais = listaNaoUrgente.querySelectorAll('li').length;
          corNota = cores[notasAtuais % cores.length];
}

    const li = document.createElement('li');
    li.classList.add('nota-item', corNota);
         li.textContent = texto;

  
        if (urgente) {
        listaUrgente.appendChild(li);
    } else {
           listaNaoUrgente.appendChild(li);
    }


    notaInput.value = "";
    checkboxUrgente.checked = false;  
});


removerUltimaNaoUrgente.addEventListener('click', () => {
    const notas = listaNaoUrgente.querySelectorAll('li');
    if (notas.length > 0) {
        listaNaoUrgente.removeChild(notas[notas.length - 1]);
    } else {
        alert("Não há notas não urgentes para remover.");
    }
});


removerUltimaUrgente.addEventListener('click', () => {
    const notas = listaUrgente.querySelectorAll('li');
    if (notas.length > 0) {
        listaUrgente.removeChild(notas[notas.length - 1]);
    } else {
        alert("Não há notas urgentes para remover.");
    }
});


apagarTudoBtn.addEventListener('click', () => {
      const notas = listaUrgente.querySelectorAll('li');
    if (notas.length > 0) {
         listaUrgente.innerHTML = "";
    } else {
        alert("Não há notas urgentes para remover.");
    }
   
    
});
apagarTudoBtnNao.addEventListener('click', () => {
    const notas = listaNaoUrgente.querySelectorAll('li');
    if (notas.length > 0) {
         listaNaoUrgente.innerHTML = "";
    } else {
        alert("Não há notas não urgentes para remover.");
    }
   
});
