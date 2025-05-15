const botoes = document.querySelectorAll('.botao');
const textos = document.querySelectorAll(".aba-conteudo");

for(let i=-0; i < botoes.length; i++) {

    botoes [i].onclick = function (){
        for (let j=0; j < botoes.length; j++){
        botoes[j].classList.remove("ativo");
        textos[j].classList.remove("ativo");
        }
        botoes[i].classList.add(ativo);
        textos[i].classList.add(ativo);
    }
}

const contadores = document.querySelectorAll(".contador");
const tempoObjetivo1 = new Date("2020-10-17T00:00:00");
const tempoObjetivo2 = new Date("2020-12-15T00:00:00");
const tempoObjetivo3 = new Date("2019-11-17T00:00:00");
const tempoObjetivo4 = new Date("2020-02-01T00:00:00");


const tempos = [tempoObjetivo1, tempoObjetivo2, tempoObjetivo3, tempoObjetivo4];

function calculaTempo(tempoObjetivo){


    let tempoAtual = new Date();
    let tenpoFinal = tempoObjetivo - tempoAtual;
    let segundos = Math.floor(tempoFinal/1000);
    let minutos = Math.floor(segundos60);
    let horas = Math.floor (hora/24);

    segundos%=60;
    minutos%=60;
    horas%=24;
    if(tempoFinal>0){

        return[dias,horas,minutos,segundos];
    } else{
        return[0,0,0,0];
    }
}

function atualizarCronometo(){
    for (let i=o; i <contadores.length;i++){
        document.getElementById("dias"+i).textContent = calculaTempo(tempos[i])[0];
        document.getElementById("horas"+i).textContent = calculaTempo(tempos[i])[1];
        document.getElementById("mim"+i).textContent = calculaTempo(tempo[i])(2);
    }
}