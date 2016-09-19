var allCards = $(".card");
var delayStartFC = null;
var numClicked = 0; 

$(".card").click(function(){
		$(this).addClass("clicked");
	if (numClicked<1){
		numClicked++; 
		console.log(numClicked);
	}
	else if (numClicked=1){
		setTimeout(function(){$(".card").removeClass ("clicked")},1000);
		numClicked-=1;
	}
});
		


	
	
	 
		




function checkWinner() {
	for (var i=0; i<=allCards.length; i++);
		if (($(".card.purple").hasClass("clicked")) 
			&& ($(".card.blue").hasClass("clicked")) 
			&& ($(".card.red").hasClass("clicked")) 
			&& ($(".card.green").hasClass("clicked"))){
				$("h3").append("You won!!");	
		}


}
		/*
		else if (($("#purpleOne").hasClass("clicked")) 
			&& ($("#purpleTwo").hasClass("clicked"))){
			console.log("yaaaaas! you found all the purples!");
		}
		else if (($("#greenOne").hasClass("clicked")) 
			&& ($("#greenTwo").hasClass("clicked"))){
			console.log("yaaaaas! you found all the greens");
		}
		else if (($(".card").hasClass("clicked")) 
				&& ($(".card").hasClass("clicked"))){
				setTimeout(function(){$(".card").removeClass ("clicked clicked")},1000);
			
			

		}
else {setTimeout(function(){$(".card").removeClass ("clicked")},2000);}
}*/

		
				





