window.onload = function() {


//click button to display number or operator

var calBtn = document.getElementsByClassName('btn');
var result = document.getElementById('result');

calBtn.onclick = clickFunction;

}

//create object to link ID, display and function together

var btnObject = {
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
	"divide" : '&#47',
	"equals" : '&#61;'
}


function clickFunction(clickedId){
//get button ID somehow
//	var x = btnID;

//get value of btnObject based on btn ID
	result.innerHTML += btnObject[clickedId];
}

function clearFunction(){
//get button ID somehow
//	var x = btnID;

//get value of btnObject based on btn ID
	result.innerHTML = '';
}

