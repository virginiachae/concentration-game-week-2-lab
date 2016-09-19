var allCards = $(".card");
var delayStartFC = null;

$(".darkBlue").click(function(){
	console.log("sanity check: darkBlue clicked!");
	$(this).addClass( "darkBlueClicked" );
	checkWinner();
});

$(".lightBlue").click(function(){
	console.log("sanity check: lightBlue clicked!");
	$(this).addClass("lightBlueClicked");
	checkWinner();

});

		
		
function checkWinner() {
	for (var i=0; i<=allCards.length; i++);
		if (($("#darkBlueOne").hasClass("darkBlueClicked")) 
			&& ($("#darkBlueTwo").hasClass("darkBlueClicked")) 
			&& ($("#lightBlueOne").hasClass("lightBlueClicked")) 
			&& ($("#lightBlueTwo").hasClass("lightBlueClicked"))){
				$('h3').append( "YOU WON!" );
		}
		else if (($("#darkBlueOne").hasClass("darkBlueClicked")) 
			&& ($("#darkBlueTwo").hasClass("darkBlueClicked"))){
			console.log("yaaaaas! you found all the darkBlues!");
		}
		else if (($("#lightBlueOne").hasClass("lightBlueClicked")) 
			&& ($("#lightBlueTwo").hasClass("lightBlueClicked"))){
			console.log("yaaaaas! you found all the lightBlues");
		}
		else if (($(".card").hasClass("darkBlueClicked")) 
				&& ($(".card").hasClass("lightBlueClicked"))){
				setTimeout(function(){$(".card").removeClass ("darkBlueClicked lightBlueClicked")},1000);
			
			

		}
}

		
				
	





