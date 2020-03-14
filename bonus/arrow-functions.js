const greetOne = function(name){
	console.log('hello ' + name)
}

const greetTwo = name => console.log('hello ' + name)

greetOne('mario')
greetTwo('yoshi')