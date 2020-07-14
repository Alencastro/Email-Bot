import {info, valid} from './data.js'

let validation = () => {
    let emailToValidation = () => {
        let lengthValidation = () => {
             for (let c = 0; c < info.emailTo.length; c++) {
                if (info.emailTo[c].length < 8) {
                    valid.break = true
                }
             }
        }
        let characterValidation = () =>{
            for (let c = 0; c < info.emailTo.length; c++) {
                if (info.emailTo[c].includes(".com") == false) {
                        valid.break = true
                }              
                if (info.emailTo[c].includes("@") == false) {
                    valid.break = true
                }
            }
        }     
        let emailEqual = () => {
            for (let c = 0; c < info.emailTo.length; c++) {
                if (info.emailTo[c] == info.emailFrom) {
                    valid.break = true
                }   
            }
        }             
    
        lengthValidation()
        characterValidation()
        emailEqual()
    }
    let emailFromValidation = () => {
        let lengthValidation = () => {
            if (info.emailFrom.length < 8) {
                valid.break = true
            }
        }
        let characterValidation = () =>{
            if (info.emailFrom.includes(".com") == false) {
                valid.break = true
            }
            if ( info.emailFrom.includes("@") == false) {
                valid.break = true
            }        
        }
        lengthValidation()
        characterValidation()
    }
    let passValidation = () => {
        let lengthValidation = () => {
            if (info.pass < 7) {
                valid.break = true
            }
        }
        lengthValidation()
    }

    emailToValidation()
    emailFromValidation()
    passValidation()
}

export {validation}