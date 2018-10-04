let lapRounds = [2.99, 3.00,3.01, 4.01, 2.79, 2.88, 3.10, 4.12];
const randomNumbers = function (lapRounds){
    return lapRounds[Math.floor(Math.random()*items.length)];
     
}
console.log(randomNumbers(lapRounds));