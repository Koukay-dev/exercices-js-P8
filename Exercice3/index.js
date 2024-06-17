// Créez votre fonction ici
function calculateAverage(nbList = []){
    const lenNbList = nbList.lenght
    if(lenNbList === 0){
        return 'No numbers to calculate average'
    }
    var somme = nbList.reduce((acc,curr) => acc + curr)
    return somme / lenNbList
}
// Exemples d'utilisation de la fonction
console.log(calculateAverage([5, 10, 15])) // retourne 10
console.log(calculateAverage([10, 20, 30, 20])) // retourne 20
console.log(calculateAverage()) // No numbers to calculate average

export default calculateAverage
