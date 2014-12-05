var fizzBuzz = function (number) {

    if (divisibleBy(3, number) && divisibleBy(5, number)) {
        return 'FizzBuzz'
    }else if(divisibleBy(5, number)){
        return 'Buzz'
    }else if(divisibleBy(3, number)){
        return 'Fizz'
    }
    return number
}

function divisibleBy(div, number){
    return number % div === 0
}