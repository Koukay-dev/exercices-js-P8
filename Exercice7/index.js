
function convertToBinary(){
    var nbToConvert = document.getElementById('decimalInput').value
    if(!estUnEntier(nbToConvert)){
        return false
    }
    const output = document.getElementById('binaryResult')

    var binary = ''
    while(nbToConvert > 0){
        binary += nbToConvert % 2 == 0 ? '0' : '1'
        nbToConvert = Math.floor(nbToConvert / 2)        
    }

    output.innerText = binary.split('').reverse().join('')
}

function estUnEntier(str) {
    let nombre = Number(str);
    return Number.isInteger(nombre);
}