// the text enclosed by two slashes (/) is the literal, each of the character is literal character
let re;
//  re = /hello/;
// re = /hello/i; // i=case insensitive
// re = /hello/g; // g=global search (return all matches)

// simple example
{
  // console.log(re);
  // console.log(re.source);
  //exec() - return result in an array or null
  //   const result = re.exec('say hello to me, hello');
  //   console.log(result);
  // console.log(result[0]);
  // console.log(result.index);
  // console.log(result.input);
}

// test() if it's true or false
{
  //   const result = re.test('hello hello');
  //   console.log(result);
}

// match()
{
  //   const str = 'Hello There';
  //   const result = str.match(re);
  //   console.log(result);
}

// search() = returns index of the first match if not found returns -1
{
  //   const str = 'john, Hello there';
  //   const result = str.search(re);
  //   console.log(result);
}

// replace() = returns new string with some or all matches of a pattern
{
  //   const str = 'john, Hello there';
  //   const newStr = str.replace(re, 'oh yes');
  //   console.log(newStr);
}

// metacharacater symbols
re = /^h/i; // must start with
re = / lo$/i; // must end with
re = /^hello$/i; // must start and end with the exact string
re = /^h.llo$/i; // matches any ONE character
re = /h*llo/i; // matches any character 0 or more times
re = /gre?a?y/i; // optinonal char, either present or not present will match
re = /gre?a?y\?/i; // escape char

// Brackets [] - character sets
re = /gr[ae]y/i; // must fill in an 'a' or 'e'
re = /[GF]ray/; // must fill in an 'G' or 'F'
re = /[^GF]ray/; // match anything except a G or F
re = /[A-Z]ray/; // match any uppercase letter
re = /[a-z]ray/; // match any lowercase letter
re = /[A-Za-z]ray/; // match any letter (just one char)
re = /[0-9]ray/; // match any number (just one number)

// Braces {} - quantifiers
re = /Hel{2}o/i; // must occur exactly m times of the character before the {}
re = /Hel{2,4}o/i; // must occur between m and n times of the character before the {}
re = /Hel{2,}o/i; // must occur at least m times of the character before the {}

// Parenthese () - grouping
re = /([0-9]x){3}/; // group the expression that needs to occur as a group for certain times

// shorthand character classes
re = /\w/; // word charater - alphanumeric (letter or number) or _ (underscore)
re = /\w+/; // + means one or more
re = /^\W/; // non-word character
re = /\d/; // match any digit
re = /\d+/; // match any digit (0 or more times)
re = /^\D/; // match any non-digit
re = /^\s/; // match whitespace char
re = /^\S/; // match non-whitespace char
re = /Hell\b/i; // word boundary

// assertions
re = /x(?=y)/; // match x only if followed by y
re = /x(?!y)/; // match x only if followed by y

// custom function
// const str = 'Hello';
// const str = '6ray? hello grey 2x5x9x4x welcome to hell';
const str = 'x3y yx xy';
// const str = ';';
const result = re.exec(str);
console.log(result);

function reTest(re, str) {
  if (re.test(str)) {
    console.log(`${str} matches ${re.source}`);
  } else {
    console.log(`${str} does NOT match ${re.source}`);
  }
}

reTest(re, str);
