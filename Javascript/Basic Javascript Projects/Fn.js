// ? isEven()

// function isEven(num){
//     if(num%2===0){
//         return true;
//     }
//     else{
//         return false;
//     }
// }

// TODO:: Alternative to isEven()

function isEven(num){
    return num%2===0;
}

// ! factorial()

function factorial(num){
    var result=1;
    for(var i=1; i<=num; i++){
        // result = result * i;
        result *= i;
    }
    return result;
}

// * kebabToSnake()

function kebabToSnake(char){
    // Replace all '-' with '_' means replacing of characters  
    // TODO:: Syntax is--> argument.replace(/character to be replaced/g , "replaced charater")
    var newStr = char.replace(/-/g , "_"); 
    // Return char
    return newStr;
}




