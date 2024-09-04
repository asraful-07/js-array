const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// console.log(numbers);
// numbers.reverse();
// console.log(numbers);
// consol.log(numbers.reverse());


const reverse =[];

for(const num of numbers){
    console.log(num);
   reverse.unshift(num);
}
console.log(reverse);