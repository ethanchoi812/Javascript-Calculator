
var result = document.getElementById('result');

var btnObj = {
	"one" : '1',
	"two" : '2',
	"three" : '3',
	"four" : '4',
	"five" : '5',
	"six" : '6',
	"seven" : '7',
	"eight" : '8',
	"nine" : '9',
	"zero" : '0',
	"plus" : '&#43;',
	"minus" : '&#45;',
	"multiply" : '&#42;',
	"divide" : '&#47'
}

var elements = document.getElementsByClassName('btn');

for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', function(){numFunction(this.id)}, false);
}

function numFunction(clickedId){
//get value of btnObject based on btn ID
	result.innerHTML += btnObj[clickedId];
}

function clearFunction(){
//get value of btnObject based on btn ID
	result.innerHTML = '';
}

function equalFunction(){
	result.innerHTML = eval(result.innerHTML);
}

