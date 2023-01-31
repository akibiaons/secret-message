let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];
secretMessage.pop();
// Step 1 was to .pop() out the last string of the array console.log(secretMessage);
secretMessage.push('to', 'program');
// Step 2 was to .push() new strings to the array console.log(secretMessage);
secretMessage[7] = 'right';
// Step 3 change an element to another string...console.log(secretMessage);
// Step 4 below will have us remove the first string the array 'Learning'
secretMessage.shift();
//console.log(secretMessage);
// Step 5 below will have us adding the string 'programming' the beginning of the array.
secretMessage.unshift('Programming');
//console.log(secretMessage);
// In the code above we used the .unshift() method to apply the string 'Programming' to the beginning of the array, as the 0 index element...
// Step 6 below will have me use the .splice() to replace indexes 6, 7, 8, 9, and 10. Then replace it with the string 'know'.
secretMessage.splice(6, 5, 'know');
//console.log(secretMessage);
// Above I used the .splice() method to replace a few indexed element strings with a string of 'know'...
console.log(secretMessage.join(' '));