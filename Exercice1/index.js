//votre code ici
function pairNumbers(min,max){
    listPair = []
    for(let i = min; i < max; i++){
        if(i%2 == 0){
            listPair.push(i)
        }
    } 
    return listPair
}

export default pairNumbers
