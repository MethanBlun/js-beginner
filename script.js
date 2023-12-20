



let listeMots = ["Cachalot", "Pétunia", "Serviette"]
let score = 0
let userWord = prompt("ecriver le mot :"+ listeMots[0])
console.log(userWord)





if(userWord === listeMots[0]){
    score++
}

let userWord2 = prompt(" maintenant ecriver le mot :"+ listeMots[1])
console.log(userWord2)
if (userWord2 === listeMots[1]){
    score++ 
}

let userWord3 = prompt(" maintenant ecriver le mot :"+ listeMots[2])
console.log(userWord3)
if (userWord3 === listeMots[2]){
    score++
}
console.log("Votre score est de " + score + " sur 3")