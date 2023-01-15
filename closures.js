

function getPasswordChecker(password) {
    return function() {
        if (password.length >= 16){
            return true
        } else {
            return false
        }
    } 
}


const pass = getPasswordChecker("Jkk(D_234|")
console.log(pass())