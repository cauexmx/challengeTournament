const name = 'Cauê'

function getEventoAleatorio(){
    const numeroAleatorio = Math.floor(Math.random()*3);
    if (numeroAleatorio == 0){
        return "Maratona"
    }else if(numeroAleatorio == 1){
        return "Triathlon"
    }else if(numeroAleatorio == 2){
        return "Pentathlon"
    }
}

let evento = getEventoAleatorio();


function getDiasTreino(evento){
    if (evento == "Maratona"){
        return '50 dias'
    }
    if (evento == "Triathlon"){
        return '100 dias'
    }
    if (evento == "Pentathlon"){
        return '200 dias'
    }
}

function logEvento(){
    console.log(`O participante ${name} irá correr a ${getEventoAleatorio()}`)
}
 
function logTempo(){
    console.log(`O ${name} irá treinar por ${getDiasTreino(evento)}`)
}

logEvento()
logTempo()