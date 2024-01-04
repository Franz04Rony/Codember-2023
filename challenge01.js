import {readFileSync} from 'fs'

const input = readFileSync('input1.txt', 'utf8')

const challenge01 = (input) => {
    // pasar el string a arreglo, parseado por espacios
    input = input.toLowerCase().split(" ")
    const copia_input = [...input]
    const mySet = new Set()
    let iterators = {}
    input.map((v,i,arr)=>{
        mySet.has(v) ? iterators = {
                ...iterators,
                [`${v}`]: iterators[v] + 1
            } 
            : 
            iterators = {
                ...iterators,
                [`${v}`]: 1
            } 
        mySet.add(copia_input.shift())
    })
    return iterators
}

const parseResult = (result) => {
    let str =  JSON.stringify(result)
    str = str.replaceAll("{","")
    .replaceAll("}","")
    .replaceAll('"','')
    .replaceAll(':','')
    .replaceAll(',','')
    return str

}

const result = challenge01(input)
console.log(parseResult(result))