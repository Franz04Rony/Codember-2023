import {readFileSync} from 'fs'

const data = readFileSync('input4.txt', 'utf8')


const verifyFiles = (data) => {
    const files = data.split("\r\n")
    const firstValidate = []
    const secondValidate = []
    files.map((v)=>{
        const parts = v.split("-")
        const fileName = parts[0].split("")
        const checksum = parts[1].split("")
        const isValidate = checksum.every((value) =>
            fileName.filter((word)=> word === value ).length === 1
        )
        isValidate && firstValidate.push(parts)
    })
    firstValidate.map((parts)=>{
        const fileName = parts[0].split("")
        const checksum = parts[1].split("")
        const isValidate = checksum.every((v,i,arr) => {
            if(i != arr.length - 1){
                return (fileName.findIndex((e)=> e === arr[i]) < fileName.findIndex((e)=> e === arr[i+1]))
            }
            else return true
        })
        isValidate && secondValidate.push(checksum.join(""))
    })
    return secondValidate[32]
}

console.log(verifyFiles(data))