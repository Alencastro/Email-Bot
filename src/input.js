import {info} from './data.js'
import readline from "readline-sync";
let counter = 1 

function input() {
    info.emailVzs = readline.question(`\nQUANTOS EMAILS PRETENDE ENVIAR? \n`)
    
    for (counter = 0; counter < info.emailVzs; counter++) {
        info.emailTo.push(readline.question(`\nPARA QUEM SERA O  EMAIL ${(counter+1)}? \n`))
    }
   
    info.emailFrom = readline.question(`\nSEU EMAIL... \n`)
   
    info.pass = readline.question(`\nSUA SENHA... \n`)
    
    info.name = readline.question(`\nSEU NOME... \n`)
    
    for (counter = 0; counter < info.emailVzs; counter++) {
        info.subject.push(readline.question(`\nASSUNTO DO EMAIL PARA "${info.emailTo[counter]}": \n`))
    }
    
    for (counter = 0; counter < info.emailVzs; counter++) {
        info.text.push(readline.question(`\nTEXTO DO EMAIL PARA " ${info.emailTo[counter]}": \n`))
    }
}

export {input} 
