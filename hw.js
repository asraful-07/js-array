  /**
   * Task 1
Write a JavaScript code to reverse the array colors without using the reverse method.

Input: const colors = ['red', 'blue', 'green', 'yellow', 'orange']

Output:

['orange', 'yellow', 'green', 'blue', 'red']
*

// ans:
const colors = ['red', 'blue', 'green', 'yellow', 'orange']

let reverse = [];

for(const color of colors){
    console.log(color)
    reverse.unshift(color);
}
console.log(reverse);

*/

/**
 * Task 4 (Hard)
Reverse the words of a sentence. Only the position of the word will be reversed. check out the output

Input: const statement = 'I am a hard working person'

Output:

'person working hard a am I'

 */

const sentence = 'I am a hard working person';


let reverse = ''
for(const letter of sentence){
    // console.log(letter);
    reverse = letter + reverse;
}
console.log(reverse);