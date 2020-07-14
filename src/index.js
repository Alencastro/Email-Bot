import {input} from './input.js'
import {validation} from './validation.js'
import {sendMail} from './email.js'

let main = () => {
    for (let c = 0; c < 1; c++) {
        input()
        validation()
        sendMail()
    }
}
main()