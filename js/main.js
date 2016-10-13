$('#stopButton').on('click', function(){
	$('h1').removeClass('active');
	$('#stopLight').css('background-color','red').addClass('active');
	
});

$('#slowButton').on('click', function(){
	$('h1').removeClass('active');
	$('#slowLight').css('background-color','yellow').addClass('active');
	
});

$('#goButton').on('click', function(){
	$('h1').removeClass('active');
	$('#goLight').css('background-color','green').addClass('active');
	
});


/*
document.getElementById ("stopButton").onclick = function(){
	document.getElementById("stopLight").style.backgroundColor = "red";
	document.getElementById("slowLight").style.backgroundColor = "";
	document.getElementById("goLight").style.backgroundColor = "";
}

document.getElementById ("slowButton").onclick = function(){
	document.getElementById("stopLight").style.backgroundColor = "";
	document.getElementById("slowLight").style.backgroundColor = "yellow";
	document.getElementById("goLight").style.backgroundColor = "";
}

document.getElementById ("goButton").onclick = function(){
	document.getElementById("goLight").style.backgroundColor = "green";
	document.getElementById("slowLight").style.backgroundColor = "";
	document.getElementById("stopLight").style.backgroundColor = "";
}
*/