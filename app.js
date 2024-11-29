let tentativas = 1
 let palpite

 alert('Boas vindas ao jogo do número secreto')
let nome= prompt("Qual o seu nome?")
let numQuant= 10
let numeroSecreto= parseInt (Math.random()* numQuant+1)
 while (palpite != numeroSecreto) {
     let palpite = prompt(`Escolha um número entre 1 e ${numQuant} `)
     if (palpite == numeroSecreto) {
         break
     } else {
         if (palpite > numeroSecreto) {
             alert('O número secreto é menor')
         } else {
             alert('O número secreto é maior')
         }
     }
     tentativas++
 }

 let plural = tentativas > 1 ? 'tentativas' : 'tentativa' 
 alert(`O número secreto era ${numeroSecreto} e você acertou com apenas ${tentativas} ${plural}`)