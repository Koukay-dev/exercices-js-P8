//votre code ici
function pairNumbers(min,max){
    let listPair = []
    for(let i = min; i <= max; i++){
        if(i%2 == 0){
            listPair.push(i)
        }
    } 
    return listPair.join(',')
}

export default pairNumbers
