
gsap.to(".ana-img", {
    duration: 1.5, // Duração da animação em segundos
    x: 20, // Move a imagem 100px para a direita
    rotation: -5, // Rotaciona a imagem 360 graus
    scale: 0.8, // Aumenta o tamanho da imagem em 1.5x
    repeat: -1, // Faz a animação repetir indefinidamente
    yoyo: true, // Faz a animação voltar para a posição inicial após cada repetição
    ease: "power1.inOut" // Define o tipo de easing para a animação
});

const bdayDate = new Date("Sep 30, 2024 2:00:00");
const timeStampDoEvento = bdayDate.getTime();

const contaAsHoras = setInterval(function() {
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const distanciaAteOEvento = timeStampDoEvento - timeStampAtual;


    const diaEmMs = 1000 * 60 * 60 * 24;
    const horaEmMS = 1000 * 60 * 60;
    const minutoEmMs = 1000 *60;

    const diasAteOEvento = Math.floor(distanciaAteOEvento / diaEmMs);
    const horasAteOEvento = Math.floor((distanciaAteOEvento % diaEmMs) / horaEmMS);
    const minutosAteOEvento = Math.floor((distanciaAteOEvento % horaEmMS) / minutoEmMs);
    const segundosAteOEvento = Math.floor((distanciaAteOEvento % minutoEmMs)/1000);


    document.getElementById('contador').innerHTML = `${diasAteOEvento} dias <br> ${horasAteOEvento} horas <br>${minutosAteOEvento} minutos <br>${segundosAteOEvento} segundos`

    if(diasAteOEvento < 0){
        clearInterval(contaAsHoras);
        document.getElementById('contador').innerHTML = 'Ana já fez bday'
    }
},1000);