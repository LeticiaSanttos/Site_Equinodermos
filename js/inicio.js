window.onload = function () {
    //VOLUME DO AUDIO
    document.getElementById('myAudio').volume = 0.2;

    //DEFINIÇÃO DO TEMA
    var titulo = document.getElementById('titulo-h4');
    var texto = document.getElementById('texto-p');
    var texto2 = document.getElementById('texto2-p');
    var texto2_2 = document.getElementById('texto2-p2');
    var texto2_3 = document.getElementById('texto2-p3');
    var texto2_4 = document.getElementById('texto2-p4');
    var texto2_5 = document.getElementById('texto2-p5');
    var texto3 = document.getElementById('texto3-p');
    var texto3_2 = document.getElementById('texto3-p2');
    var texto3_3 = document.getElementById('texto3-p3');

    //DEFINIÇÃO
    texto.innerHTML = "Os equinodermos (do grego echinos: espinhos; derma: pele) fazem parte do grupo de animais marinhos, dotados de um endoesqueleto (endo = dentro) calcário muitas vezes provido de espinhos salientes," +
        " que justificam o nome zoológico do grupo. "
    //CARACTERISTICAS
        texto2.innerHTML = " Durante sua fase larval, possuem simetria bilateral. Já na fase adulta, possuem simetria radial;";
        texto2_2.innerHTML = "Não formam colônias nem existem espécies parasitas.";
        texto2_3.innerHTML = "Não possuem cabeça, portanto, seu corpo não apresenta região anterior e posterior, ele é organizado em eixo oral-aboral, sendo a porção oral a região da boca e a porção aboral a região oposta a ela;";
        texto2_4.innerHTML = "São triblásticos, celomados e deuterostômios;";
        texto2_5.innerHTML = "Apresentam uma grande diversidade de formas, tamanhos e modos de vida.";
        //NUTRIÇÃO
        texto3.innerHTML = "Os equinodermos alimentam-se de pequenos animais marinhos e algas, podendo ser <b>herbívoros</b> ou <b>carnívoros</b>. A estrela-do-mar é um exemplo de alimentação carnívora, tendo na sua base alimentar moluscos," +
        " crustáceos, vermes, entre outros. O sistema digestório dos equinodermos é completo, apresentando boca, esôfago, estômago e ânus. ";
    texto3_2.innerHTML = "Os equinodermos herbívoros possuem estruturas que se assemelham a dentes, sendo chamadas de lanterna de Aristóteles. " +
        "Esses dentes rodeiam completamente a boca, tendo suas extremidades expostas na face oral no formato de cinco dentes, possuindo a função de raspar o alimento do substrato.";
    texto3_3.innerHTML = "Os equinodermos carnívoros possuem um processo digestivo diferente, chamado digestão extracorpórea. O estômago das estrelas-do-mar é protegido com enzimas digestivas, então o estômago sai da boca e o contato direto com as presas faz essas enzimas a digerirem, e após ser conduzido ao interior do corpo, a digestão é finalizada.";
}

function mostrarMais(id) {
    var mais = document.getElementById(id);
    var img = document.getElementById('imgM');
    var div = document.getElementById('div-some');

    if (mais.innerHTML == 'Ver Mais') {
        if (id == "mais-d") {
            img.style = "display:block;"
        }
        else if (id == "mais-n") {
            div.style = "display:block;"
        }
        mais.innerHTML = "Ver Menos";
    }
    else {
        if (id == "mais-d") {
            img.style = "display:none;"
        }
        else if (id == "mais-n") {
            div.style = "display:none;"
        }
        mais.innerHTML = "Ver Mais";
    }
}

function fecharMenu() {
    //var menu = document.getElementsByClassName('offcanvas');
    
    const event = new Event('click');
    const element = document.querySelector(".btn-close")
    element.addEventListener("click", function () {})
    element.dispatchEvent(event);
}

function PlaySound(audio) {
    var musica = document.getElementById(audio);
    musica.play();
    musica.currentTime = 60;
    musica.volume = 0.2;
}
function PauseSound(audio) {
    var musica = document.getElementById(audio);
    musica.volume = 0.2;
    musica.pause();
    musica.currentTime = 0;
}