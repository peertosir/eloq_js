//task is to replace all single quotation marks with double quotation marks with touching single inside word D'ark f.e.

let regexp = /(^|\W)'|'(\W|$)/g;

let text = "'I'm the cook,' he said, 'it's my job.'";

console.log(text.replace(regexp, '$1"$2'));
