const inputNumero = document.getElementById("numero")
const inputBase = document.getElementById("base")
const inputBaseConversione = document.getElementById("baseConversione")
const outputRisultato = document.getElementById("risultato")

const bottone = document.getElementById("convert_bttn")

let stringaNumero
let base = BigInt(10)
let baseConversione = BigInt(2)
let numeroInBaseDieci =BigInt(0)

let arrayResti = []
let risultato = []


// DICHARO UN' ARRAY DI LETTERE DELL'ALFABETO CHE UTILIZZERO' POI PER LE BASI MAGGIORI DI 10

const alfabeto = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']

function sceltaBase(){
    base = BigInt(inputBase.options[inputBase.selectedIndex].text)
}

function sceltaBaseConversione () {
    baseConversione = BigInt(inputBaseConversione.options[inputBaseConversione.selectedIndex].text)
}

function clickBottone(){
    
    // INFLUENZA LO STILE DEL BOTTONE 
    bottone.classList.add("active")
    setTimeout(
        () => {
            bottone.classList.remove("active")
        }, 300
    )
    

    // INIZIALIZZA LE VARIBILI PER IL PRIMO UTILIZZO E PER QUELLI SUCCESSIVI
    stringaNumero = inputNumero.value
    arrayResti = []
    risultato = []
    numeroInBaseDieci = BigInt(0)

    // CONTROLLO CHE LE VARIABILI SIANO VALIDE
    let caratteriConsentiti = /^[a-z0-9]+$/i

    if (caratteriConsentiti.test(stringaNumero) === false){
        alert("inserisci un numero corretto")
    } 

    convertiInBaseDieci()
}

const power = (num1, num2) => {
    let aux = BigInt(1)
    for (let i = 0; i < num2 ; i++){
        aux = aux * BigInt(num1)
    }
    return aux
}

function convertiInBaseDieci () {
    for(let i = 0; i < stringaNumero.length; i++){ 
        
        if ( !isNaN(stringaNumero[i])) {
            numeroInBaseDieci += BigInt(stringaNumero[i]) * power(base,  stringaNumero.length -  (i + 1))            
        } else {
            numeroInBaseDieci += BigInt(alfabeto.indexOf(stringaNumero[i].toLowerCase()) + 10) * power(base,  stringaNumero.length -  (i + 1))
            console.log(alfabeto.indexOf(stringaNumero[i].toLowerCase()) + 10)
        }

    }
    convertiInBaseMinore(numeroInBaseDieci)
}


function convertiInBaseMinore (numeroInBaseDieci) {
    // DIVIDE IL NUMERO E PRENDE LA PARTE INTERA
    let risultatoDellaDivisione = BigInt(numeroInBaseDieci / baseConversione)


    // INSERISCE IL RESTO DELLA DIVISIONE DENTRO L'ARRAY
    let restoDellaDivisione = BigInt(numeroInBaseDieci % baseConversione)

    console.log(`resto della divisione: ${restoDellaDivisione}`)

    if (restoDellaDivisione > 9){
        arrayResti.push(alfabeto[restoDellaDivisione - BigInt(10)].toUpperCase())
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