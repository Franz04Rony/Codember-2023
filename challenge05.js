import {readFileSync} from 'fs'

const users = readFileSync("input5.txt", 'utf8')

const reAlphaNumeric = /^[a-zA-Z0-9]+$/
const reEmail = /^\w+\@[a-zA-Z0-9]+\.[a-zA-Z]+$/
const reAge = /^\d*$/
const reLocation = /^.*$/
const invalidateUsers = []
const validateUsers = []

const checkUsers = (users) => {
    const data = users.split("\r\n")
    data.map((user)=>{
        const userData = user.split(",")
        if(
            reAlphaNumeric.test(userData[0]) &&
            reAlphaNumeric.test(userData[1]) &&
            reEmail.test(userData[2]) &&
            reAge.test(userData[3]) &&
            reLocation.test(userData[4])
        )
            validateUsers.push(userData[1].charAt())
        else invalidateUsers.push(userData[1].charAt())
    })
    return invalidateUsers.join("")
}

console.log(checkUsers(users))