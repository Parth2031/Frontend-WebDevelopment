// TODO:: Regular Expression is defined by /.../ where, "." describes pattern of characters means they are characters,strings,etc are present.
// TODO:: Literal Charcters are also known as String.

// ! Regular Expresion (re) -
let re;

// ! Literal Characters RE -
re = /hello/;
re = /hello/i;

// ! Metacharacter Symbols :-

// ?   "^" - Must start with,                        infront of Character or Literal Characters.
// ?   "$" - Must ends with,                         at last of Character or Literal Characters.
// ?   "^ ..... &" -  Must begin and end with,       so the Character or Literal Characters in between.
// ?   "." - Matches any ONE character,              instead of the Character.
// ?   "*" - Matches any character 0 or more times,  instead of Multiple Characters.
// ?   "?" - Optional character,                     written after the Character which is in doubt. 
// * We have Alternative to Optional Charcters that is Brackets.
// ?   "\" - Escape character,                 written before the Symbol to get it included in Literal Charcters.  

re = /^h/i;
re = / world$/i;
re = /^hello$/i;
re = /h.llo/i;
re = /h*llo/i;
re = /gre?a?y/i;
re = /gre?a?y\?/i;     

// ! Brackets [] - Character Sets :-

re = /gr[ae]y/i;       // ? Must be an a or e.                  In this, Brackets are working as Optional Charcters at that position.
re = /[GF]ray/i;       // ? Must be a G or F.                   In this, Brackets are working as Optional Charcters at that position. 
re = /[^GF]ray/i;      // ? Match anything except a G or F.     In this, Brackets are allowing all characters except in brackets.
re = /[A-Z]ray/;       // ? Match any uppercase letter.         In this, Brackets with "-" is making a range.
re = /[a-z]ray/;       // ? Match any lowercase letter.         In this, Brackets with "-" is making a range.
re = /[A-Za-z]ray/;    // ? Match any  letter.                  In this, Brackets are adding two ranges.
re = /[0-9][0-9]ray/;  // ? Match any digit.                    In this, Wea re using Multiple Brackets for Multiple Locations. 

// ! Braces {} - Quantifiers :--

re = /Hel{2}o/i;          // ? Must occur exactly {m} amount of times after the Character.
re = /Hel{2,4}o/i;      // ? Must occur between a range {m,n} amount of times after the Character.
re = /Hel{2,}o/i;            // ? Must occur at least {m,} times after the Character.

// ! Paretheses () - Grouping :-

re = /^([0-9]x){3}$/     // ? In this, () is Pairing a group of sets of characters.

// ! Shorthand Character Classes :-

re = /\w/;           // ? It defines as Word character - alphanumeric or _. 
re = /\w+/;          // ? "+" - It defines as One or More.
re = /\W/;           // ? It defines as Non-Word character.
re = /\d/;           // ? It matches any digit.
re = /\d+/;          // ? It matches any digit 0 or more times.
re = /\D/;           // ? It matches any Non-digit.
re = /\s/;           // ? It matches whitespace character.
re = /\S/;           // ? It matches non-whitespace character.
re = /Hell\b/i;      // ? It defines as Word boundary.

// ! Assertions :-

re = /x(?=y)/;      // ? Match x only if followed by y
re = /x(?!y)/;      // ? Match x only if NOT followed by y


// TODO:: Examples:

// ! String to match:

// const str = 'Gray?';
// const str = '3x3x3x';
// const str = 'Hello, welcome to Hell';
const str = 'dkjekdxydjekdj';

// ! Log Results:
const result = re.exec(str);
console.log(result);

function reTest(re, str)
{
  if(re.test(str)) 
    console.log(`${str} matches ${re.source}`);
  else 
    console.log(`${str} does NOT match ${re.source}`);
}

reTest(re, str);