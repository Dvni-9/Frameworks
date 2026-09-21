
let contador = 0;

let valor = document.getElementById('contador');
let btnSumar = document.getElementById('sumar');
let btnRestar = document.getElementById('restar');

if (!valor || !btnSumar || !btnRestar) {
    valor = document.createElement('h1');
    valor.id = 'contador';
    btnSumar = document.createElement('button');
    btnSumar.id = 'sumar';
    btnSumar.textContent = '+1';
    btnRestar = document.createElement('button');
    btnRestar.id = 'restar';
    btnRestar.textContent = '-1';
    document.body.append(valor, btnSumar, btnRestar);
}

valor.textContent = contador;


btnSumar.addEventListener('click', () => {
    contador++;
    valor.textContent = contador;
});

btnRestar.addEventListener('click', () => {
    contador--;
    valor.textContent = contador;
});
