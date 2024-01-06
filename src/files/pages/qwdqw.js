function countPrimes(num){
    let primeNumbers = []
    let count = 0;
    for(let i = 2; i <= num; i++){
        let prime = true;
        for(let j = 2; j < i; j++){
            if(i % j == 0){
                prime = false;
                break;
            }
        }
        if(prime){
            count++;
            primeNumbers.push(i)
        }
    }
    return primeNumbers;
}

console.log("total Prime numbers",countPrimes(100));