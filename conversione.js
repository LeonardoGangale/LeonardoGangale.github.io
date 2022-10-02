const inputNumero = document.getElementById("numero")
const inputBase = document.getElementById("base")
const inputBaseConversione = document.getElementById("baseConversione")
const outputRisultato = document.getElementById("risultato")

let numero
let stringaNumero
let base
let baseConversione
let numeroInBaseDieci = 0

let arrayResti = []
let risultato = []

for (let i = 2; i <= 36; i++){
    console.log(`<option class="option"> ${i} </option>`)
}

// DICHARO UN' ARRAY DI LETTERE DELL'ALFABETO CHE UTILIZZERO' POI PER LE BASI MAGGIORI DI 10

const alfabeto = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']

function sceltaBase(){
    console.log(inputBase.options[inputBase.selectedIndex].text)
}

function clickBottone(){
    
    // INIZIALIZZA LE VARIBILI PER IL PRIMO UTILIZZO E PER QUELLI SUCCESSIVI
    stringaNumero = inputNumero.value
    base =  parseInt(inputBase.value)
    baseConversione = parseInt(inputBaseConversione.value)
    arrayResti = []
    risultato = []
    numeroInBaseDieci = 0

    // CONTROLLO CHE LE VARIABILI SIANO VALIDE
    let caratteriConsentiti = /^[a-z0-9]+$/i

    if (caratteriConsentiti.test(stringaNumero) === false){
        alert("inserisci un numero corretto")
    } 

    convertiInBaseDieci()
    
}


function convertiInBaseDieci () {
    for(let i = 0; i < stringaNumero.length; i++){ 
        
        if ( !isNaN(stringaNumero[i])) {
            numeroInBaseDieci += parseInt(stringaNumero[i]) * Math.pow(base,  stringaNumero.length -  (i + 1))            
        } else {
            numeroInBaseDieci += (alfabeto.indexOf(stringaNumero[i].toLowerCase()) + 10) * Math.pow(base,  stringaNumero.length -  (i + 1))
            console.log(alfabeto.indexOf(stringaNumero[i].toLowerCase()) + 10)
        }

    }
    convertiInBaseMinore(numeroInBaseDieci)
}


function convertiInBaseMinore (numeroInBaseDieci) {
    // DIVIDE IL NUMERO E PRENDE LA PARTE INTERA
    let risultatoDellaDivisione = Math.floor(numeroInBaseDieci / baseConversione )


    // INSERISCE IL RESTO DELLA DIVISIONE DENTRO L'ARRAY
    let restoDellaDivisione = numeroInBaseDieci % baseConversione
    console.log(`resto della divisione: ${restoDellaDivisione}`)

    if (restoDellaDivisione > 10){
        arrayResti.push(alfabeto[restoDellaDivisione - 10].toUpperCase())
    } else {
        arrayResti.push(numeroInBaseDieci % baseConversione)
    }


    
    if (risultatoDellaDivisione > 0){
        convertiInBaseMinore(risultatoDellaDivisione)
    } else {
        mostraRisultato()
    }
    
}


function mostraRisultato(){
    for (let i =  arrayResti.length - 1; i > -1; i--){
        risultato.push(arrayResti[i])
    }

    outputRisultato.innerHTML = `${risultato.join("")}<sub>${baseConversione}</sub>`
}