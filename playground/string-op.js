const firstName = 'Mike';
const lastName = 'Tyson';
const age = 36;
const str = 'Hello there my name is Mike';
const tags = 'web design,web development,programming';

let result;

result = firstName + lastName;

// Concatenation
result = firstName + ' ' + lastName;

// Append
result = 'Mike ';
result += 'tyson';

result = 'Hello, my name is ' + firstName + ' and I am ' + age;

// Escaping
result =  'That\'s awesome, I can\'t wait';

// Length
result = firstName.length;

// concat()
result = firstName.concat(' ', lastName);

// Change case
result = firstName.toUpperCase();
result = firstName.toLowerCase();

result = firstName[2];

// indexOf()
result = firstName.indexOf('l');
result = firstName.lastIndexOf('l');

// charAt()
result = firstName.charAt('2');
// Get last char
result = firstName.charAt(firstName.length - 1);

// substring()
result = firstName.substring(0, 4);

// slice()
result = firstName.slice(0,4);
result = firstName.slice(-3);

// split()
result = str.split(' ');
result = tags.split(',');

// replace()
result = str.replace('Mike', 'simmon');//case-sensitive

// includes()
result = str.includes('mike');//true/false

console.log(result);