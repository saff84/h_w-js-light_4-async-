

function getPasswordChecker(truePassword) {

    return function(password) {
        if (password === truePassword){
            return true
        } else {
            return false
        }
    } 
}


const pass = getPasswordChecker("123456789")
console.log(pass("Jkk(D_234|"))