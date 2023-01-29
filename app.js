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
