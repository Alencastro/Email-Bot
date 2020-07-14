import nodemailer from 'nodemailer'
import {info, valid} from './data.js'

let sendMail = () => {
    if (valid.break == false) {  
        let transporter = nodemailer.createTransport({
                host: "smtp.gmail.com",
                port: 587,
                secure: false,
                auth: {
                    user: info.emailFrom,
                    pass: info.pass
            }})

        for (let c = 0; c < info.emailVzs; c++) {
            
            transporter.sendMail({
                from: info.name + info.emailFrom,
                to: info.emailTo[c],
                subject: info.subject[c],
                text: info.text[c],
            }).then (message =>{
            console.log(`\n\nEMAIL ENVIADO COM SUCESSO\n\n`)
            }).catch(err =>{
                console.log(err)
            })
        }  
    }else {
        console.log(`\n\nALGUMA INFORMACAO NAO ESTA CORRETA, TENTE NOVAMENTE.`)
    }
}

export {sendMail}