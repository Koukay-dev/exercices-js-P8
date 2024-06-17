
const display = document.getElementById('display')
display.value = '10 + 5 - 3'

function appendToDisplay(string){
    const currentDisplay = display.value
    if(estUnEntier(string)){
        display.value = currentDisplay + string
    } else if(currentDisplay[currentDisplay.length -1] != ' ') {
        display.value = currentDisplay + ' ' + string + ' '
    }
}


function clearDisplay(){
    display.value = ''
}


function calculateResult(){
    const currentDisplay = display.value
    const splittedValue = currentDisplay.split(' ')
    
    if(splittedValue.length === 3){
        console.log(calculate(splittedValue[0],splittedValue[1], splittedValue[2]))
        display.value = calculate(splittedValue[0],splittedValue[1], splittedValue[2])
        return true
    }

    var currentValue = splittedValue[0] 
    for(let i = 1; i < splittedValue.length ; i+=2){
        console.log(currentValue+' '+splittedValue[i]+' '+ splittedValue[i+1])
        currentValue = calculate(currentValue,splittedValue[i], splittedValue[i+1])
    }
    display.value = currentValue
}


function calculate(nb1 = 0, operateur, nb2 = 0){
    nb1 = Number(nb1)
    nb2 = Number(nb2)
    switch(operateur){
        case ('+'):
            return nb1 + nb2
        case ('-'):
            return nb1 - nb2
        case ('*'):
            return nb1 * nb2
        case ('/'):
            if(nb2 === 0){
                return 'Division by zero is not allowed'
            }
            return nb1 / nb2
        case ('%'):
            return 'Invalid operator'
    }
}


function estUnEntier(str) {
    let nombre = Number(str);
    return Number.isInteger(nombre);
}