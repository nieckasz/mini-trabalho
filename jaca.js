// Seleção dos elementos HTML
const notaInput = document.getElementById('notaInput');
const adicionarBtn = document.getElementById('adicionarBtn');
const listaNaoUrgente = document.getElementById('listaNaoUrgente');
const listaUrgente = document.getElementById('listaUrgente');
const apagarTudoBtn = document.getElementById('apagarTudoBtn');
const checkboxUrgente = document.getElementById('checkboxUrgente');
const removerUltimaNaoUrgente = document.getElementById('removerUltimaNaoUrgente');
const removerUltimaUrgente = document.getElementById('removerUltimaUrgente');

// Cores das notas (fixas)
const cores = ["azul", "verde", "roxo"];
let indiceCorNaoUrgente = 0;
let indiceCorUrgente = 0;

// Função para adicionar nota
adicionarBtn.addEventListener('click', () => {
    const texto = notaInput.value.trim();
    if (texto === "") {
        alert("Digite uma nota!");
        return;
    }

    // Verifica se a nota é urgente
    const urgente = checkboxUrgente.checked;

    // Determina a cor da nota dependendo da caixa
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

    // Adiciona a nota na lista correta
    if (urgente) {
        listaUrgente.appendChild(li);
    } else {
        listaNaoUrgente.appendChild(li);
    }

    // Limpa o campo de input
    notaInput.value = "";
    checkboxUrgente.checked = false;  // Desmarca a checkbox após adicionar
});

// Remover última nota NÃO URGENTE
removerUltimaNaoUrgente.addEventListener('click', () => {
    const notas = listaNaoUrgente.querySelectorAll('li');
    if (notas.length > 0) {
        listaNaoUrgente.removeChild(notas[notas.length - 1]);
    } else {
        alert("Não há notas não urgentes para remover.");
    }
});

// Remover última nota URGENTE
removerUltimaUrgente.addEventListener('click', () => {
    const notas = listaUrgente.querySelectorAll('li');
    if (notas.length > 0) {
        listaUrgente.removeChild(notas[notas.length - 1]);
    } else {
        alert("Não há notas urgentes para remover.");
    }
});

// Apagar todas as notas
apagarTudoBtn.addEventListener('click', () => {
    listaNaoUrgente.innerHTML = "";
    listaUrgente.innerHTML = "";
});
