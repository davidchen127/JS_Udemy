const user = { email: 'gg@gmail.com' };

try {
  // Produce a RefereceError because the function is not defined
  //   myFunction();

  // Produce a TypeError
  //   null.myFunction();

  // SyntaxError
  //   eval("hello world");

  // URIError
  //   decodeURIComponent("%");

  if (!user.name) {
    // throw 'user has no name attribute';
    throw new SyntaxError('User has no name attribute');
  }
} catch (e) {
  //   console.log(e);
  console.log(`User error: ${e.message}, ${e.name}`);
  //   console.log(e.name);
  console.log(e instanceof ReferenceError);
  console.log(e instanceof TypeError);
} finally {
  console.log('finally will run no matter what');
}

console.log('program continues...');
