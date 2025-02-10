const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

const relogio = setInterval(function time() {
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let seg = dateToday.getSeconds();

    if (hr < 10) hr = '0' + hr;  // Adiciona zero à esquerda se a hora for menor que 10
    if (min < 10) min = '0' + min;  // Adiciona zero à esquerda se o minuto for menor que 10
    if (seg < 10) seg = '0' + seg;  // Adiciona zero à esquerda se o segundo for menor que 10

    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = seg;
}, 1000);  // Atualiza a cada 1000 milissegundos (1 segundo)
