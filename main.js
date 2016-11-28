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

// function whoAmI(name, age){
// var yob = yearOfBirth(age);
// console.log('Hi, my name is ' + name + ' and I\'m ' + age + ' years old');
// }

// whoAmI('Chris', 29);

// function yearOfBirth(age) {
// 	var yearOfBirth = 2016 - age;
// 	console.log('I was born in ' + yearOfBirth);
// }

function yearOfBirth(age){
	//if age is negative
	if(age < 0){
		throw new Error('Age cannot be negative');
	}
	return 2016 - age;
}

// whoAmI('Chris', -5)



function whoAmI(name, age){
if (typeof name !== 'string' ||  name === undefined){ 
	throw new Error('Arguments not valid'); 
	//age isn't equal to a number
	}else if(typeof age !== 'number' || age === undefined){
	throw new Error('Arguments not valid'); 		
	}
}

whoAmI('Chris', 'twenty-nine')
