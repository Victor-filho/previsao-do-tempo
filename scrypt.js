let chave = 'f33e15a8b6f588eb5291a66fd36a786f'

function colocarnatela(dados) {
    console.log(dados)

    document.querySelector(".cidade").innerHTML = "Tempo Em " + dados.name
    document.querySelector(".graus").innerHTML = Math.floor(dados.main.temp) + " °C"
    document.querySelector(".icone").src = "http://openweathermap.org/img/wn/" + dados.weather[0].icon + ".png"
    document.querySelector(".umidade").innerHTML = "Umidade: " + dados.main.humidity + "%"
}

async function buscarcidade(cidade) {
    let dados = await fetch(
        'https://api.openweathermap.org/data/2.5/weather?q=' +
        cidade +
        '&appid=f33e15a8b6f588eb5291a66fd36a786f&units=metric',
    ).then(resposta => resposta.json())

    colocarnatela(dados)
}

function cliqueinobotao() {
    let cidade = document.querySelector('.input-cidade').value

    buscarcidade(cidade)
}