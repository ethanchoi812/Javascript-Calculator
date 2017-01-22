var calBtn = document.getElementsByClassName('btn');
var result = document.getElementById('result');

//result.innerHTML = "test";



function myFunction(){
	result.innerHTML = "test";
}

calBtn.onclick = function(){myFunction()};