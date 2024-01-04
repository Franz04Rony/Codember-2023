import {readFileSync} from 'fs'

const data = readFileSync("input3.txt", 'utf8')

const checkPassword = (data) => {
    const rows = data.split("\r\n")
    const invalidates = []
    const validates = []
    rows.map((v)=>{
        const password =  v.replaceAll(":","").split(" ")
        const intervale = password[0].split("-")
        const words =  password[2].split("").filter((v)=> v === password[1])
        if( words.length >= +intervale[0] && words.length <= +intervale[1] ){
            validates.push(password[2])
        }
        else{
            invalidates.push(password[2])
        }
    })
    return invalidates[12]
}

console.log(checkPassword(data))