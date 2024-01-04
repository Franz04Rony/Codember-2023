import {readFileSync} from 'fs'

const data = readFileSync('input2.txt', 'utf8')

const compilador = (str) => {
    const arr = str.split("")
    let answer = 0
    let log = ""
    while(arr.length){
        let actual = arr[0]
        switch (actual) {
            case "#":
                answer = answer + 1
                break;
        
            case "@":
                answer = answer - 1
                break
                
            case "*":
                answer = answer * answer
                break

            case "&":
                log = log + answer
            default:
                break;
        }
        arr.shift()
    }
    return log
}

console.log(compilador(data))