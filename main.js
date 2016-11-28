// console.log("Hi, my name is Chris and I'm 29 years old");

// function whoAmI(){
// console.log("Hi, my name is Chris and I'm 29 years old");
// }

//whoAmI()

// function whoAmI(name, age){
// var yearOfBirth = 2016 - age;
// console.log('Hi, my name is ' + name + ' and I\'m ' + age + ' years old');
// console.log('I was born in ' + yearOfBirth);
// }

// whoAmI('Chris', 29);

// function whoAmI(name, age){
// var yearOfBirth = yearOfBirth(age);
// console.log('Hi, my name is ' + name + ' and I\'m ' + age + ' years old');
// }

// whoAmI('Chris', 29);

// function yearOfBirth(age) {
// 	var yearOfBirth = 2016 - age;
// 	console.log('I was born in ' + yearOfBirth);
// }
//This is an example of hoisting

function whoAmI(name, age){
var yob = yearOfBirth(age);
console.log('Hi, my name is ' + name + ' and I\'m ' + age + ' years old');
}

whoAmI('Chris', 29);

function yearOfBirth(age) {
	var yearOfBirth = 2016 - age;
	console.log('I was born in ' + yearOfBirth);
}


