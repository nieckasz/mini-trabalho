// Seleção dos elementos HTML
const notaInput = document.getElementById('notaInput');
const adicionarBtn = document.getElementById('adicionarBtn');
const listaNaoUrgente = document.getElementById('listaNaoUrgente');
const listaUrgente = document.getElementById('listaUrgente');
const apagarTudoBtn = document.getElementById('apagarTudoBtn');
const checkboxUrgente = document.getElementById('checkboxUrgente');
const removerUltimaNaoUrgente = document.getElementById('removerUltimaNaoUrgente');
const removerUltimaUrgente = document.getElementById('removerUltimaUrgente');


const cores = ["azul", "verde", "roxo"];
let indiceCorNaoUrgente = 0;
let indiceCorUrgente = 0;


adicionarBtn.addEventListener('click', () => {
    const texto = notaInput.value.trim();
    if (texto === "") {
        alert("Digite uma nota!");
        return;
    }

    const urgente = checkboxUrgente.checked;

    let corNota;
    if (urgente) {
        corNota = cores[indiceCorUrgente];
        indiceCorUrgente = (indiceCorUrgente + 1) % cores.length; // Move para a próxima cor (circular)
    } else {
        corNota = cores[indiceCorNaoUrgente];
        indiceCorNaoUrgente = (indiceCorNaoUrgente + 1) % cores.length; // Move para a próxima cor (circular)
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

s
apagarTudoBtn.addEventListener('click', () => {
    listaNaoUrgente.innerHTML = "";
    listaUrgente.innerHTML = "";
});
