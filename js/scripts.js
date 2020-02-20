
alert('hello world')
// NOT RECOMMENDED
var myName = 'Antonio'
document.write(myName)
// RECOMMENDED
var myName = 'Antonio';
document.write(myName);
myName = '  John Doe';
document.write(myName);

// NOT RECOMMENDED
var myName = 'Fred';document.write(myName);

// RECOMMENDED
var myName = 'Fred';
document.write(myName);

//Mathematical Expressions
var size = 100
var doubleSize = size * 2
document.write(doubleSize)
var product = 2
var halfSize = size / product
document.write(halfSize)
var final = (doubleSize / 2) + (halfSize *2)
document.write(final)
