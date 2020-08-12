window.onload = () => {

    let mono = ["&#9830", "&#9829", "&#9824", "&#9827"];
    let mono2 = ["&#9830", "&#9829", "&#9824", "&#9827"];
    let numeros = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

    function randomNumber() {

        let numeroRandom = Math.floor(Math.random() * (numeros.length));
        document.getElementById('numero').innerHTML = numeros[numeroRandom];

    }

    function monos() {
        let numeroRandom = Math.floor(Math.random() * (mono.length));
        document.getElementById('icono').innerHTML = mono[numeroRandom];
        document.getElementById('icono2').innerHTML = mono2[numeroRandom];

        if (mono[numeroRandom] === '&#9830' || mono[numeroRandom] === '&#9829'){
            document.getElementById("carta").classList.add("red");
        } else if (mono2[numeroRandom] === "&#9827" || mono2[numeroRandom] === "&#9824") {
            document.getElementById("carta").classList.remove("red");

        }
    }

    //diamante &#9830
    //trebol    &#9827
    //corazon  &#9829
    //pica  &#9824



    randomNumber()
    monos()

}
