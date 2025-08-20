document.addEventListener('DOMContentLoaded', () => {

    // ------------------ AMARELO ------------------

    const cardAmarelo = document.getElementById('cardAmarelo');
    const amareloDiv = document.getElementById('amarelo');
    
    let mouseLeaveTimerAmarelo;

    function mostrarDivAmarela() {
        amareloDiv.classList.add('toggle');
        console.log("Div amarela apareceu!");
    }

    function esconderDivAmarela() {
        amareloDiv.classList.remove('toggle');
        console.log("Div amarela sumiu!");
    }

    cardAmarelo.addEventListener('mouseenter', () => {
        clearTimeout(mouseLeaveTimerAmarelo);
        mostrarDivAmarela();
    });

    cardAmarelo.addEventListener('mouseleave', () => {
        mouseLeaveTimerAmarelo = setTimeout(() => {
            esconderDivAmarela();
        }, 750);
    });

    amareloDiv.addEventListener('mouseenter', () => {
        clearTimeout(mouseLeaveTimerAmarelo);
        console.log("entrou na div amarela");
    });

    amareloDiv.addEventListener('mouseleave', () => {
        mouseLeaveTimerAmarelo = setTimeout(() => {
            esconderDivAmarela();
            console.log("saiu da div amarela");
        }, 1000);
    });

    // ------------------ VERDE ------------------

    const cardVerde = document.getElementById('cardVerde');
    const verdeDiv = document.getElementById('verde');
    
    let mouseLeaveTimerVerde;

    function mostrarDivVerde() {
        verdeDiv.classList.add('toggle');
        console.log("Div verde apareceu!");
    }

    function esconderDivVerde() {
        verdeDiv.classList.remove('toggle');
        console.log("Div verde sumiu!");
    }

    cardVerde.addEventListener('mouseenter', () => {
        clearTimeout(mouseLeaveTimerVerde);
        mostrarDivVerde();
    });

    cardVerde.addEventListener('mouseleave', () => {
        mouseLeaveTimerVerde = setTimeout(() => {
            esconderDivVerde();
        }, 750);
    });

    verdeDiv.addEventListener('mouseenter', () => {
        clearTimeout(mouseLeaveTimerVerde);
        console.log("entrou na div verde");
    });

    verdeDiv.addEventListener('mouseleave', () => {
        mouseLeaveTimerVerde = setTimeout(() => {
            esconderDivVerde();
            console.log("saiu da div verde");
        }, 1000);
    });

    // AZUL
    const cardAzul = document.getElementById('cardAzul');
    const azulDiv = document.getElementById('azul');

    let mouseLeaveTimerAzul;

    function mostrarDivAzul() {
        azulDiv.classList.add('toggle');
        console.log("Div azul apareceu!");
    }

    function esconderDivAzul() {
        azulDiv.classList.remove('toggle');
        console.log("Div azul sumiu!");
    }

    cardAzul.addEventListener('mouseenter', () => {
        clearTimeout(mouseLeaveTimerAzul);
        mostrarDivAzul();
    });

    cardAzul.addEventListener('mouseleave', () => {
        mouseLeaveTimerAzul = setTimeout(() => {
            esconderDivAzul();
        }, 750);
    });

    azulDiv.addEventListener('mouseenter', () => {
        clearTimeout(mouseLeaveTimerAzul);
        console.log("entrou na div azul");
    });

    azulDiv.addEventListener('mouseleave', () => {
        mouseLeaveTimerAzul = setTimeout(() => {
            esconderDivAzul();
            console.log("saiu da div azul");
        }, 1000);
    });

    // VERMELHO
    const cardVermelho = document.getElementById('cardVermelho');
    const vermelhoDiv = document.getElementById('vermelho');

    let mouseLeaveTimerVermelho;

    function mostrarDivVermelho() {
        vermelhoDiv.classList.add('toggle');
        console.log("Div vermelha apareceu!");
    }

    function esconderDivVermelho() {
        vermelhoDiv.classList.remove('toggle');
        console.log("Div vermelha sumiu!");
    }

    cardVermelho.addEventListener('mouseenter', () => {
        clearTimeout(mouseLeaveTimerVermelho);
        mostrarDivVermelho();
    });

    cardVermelho.addEventListener('mouseleave', () => {
        mouseLeaveTimerVermelho = setTimeout(() => {
            esconderDivVermelho();
        }, 750);
    });

    vermelhoDiv.addEventListener('mouseenter', () => {
        clearTimeout(mouseLeaveTimerVermelho);
        console.log("entrou na div vermelha");
    });

    vermelhoDiv.addEventListener('mouseleave', () => {
        mouseLeaveTimerVermelho = setTimeout(() => {
            esconderDivVermelho();
            console.log("saiu da div vermelha");
        }, 1000);
    });
});
