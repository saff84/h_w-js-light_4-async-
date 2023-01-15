

function getPasswordChecker() {
    return function(password) {
        if (password.length >= 16){
            return true
        } else {
            return false
        }
    } 
}


const pass = getPasswordChecker()
console.log(pass("Jkk(D_234|"))