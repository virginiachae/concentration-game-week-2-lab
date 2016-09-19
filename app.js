var allCards = $(".card");
var delayStartFC = null;

$(".ravenclaw").click(function(){
	console.log("sanity check: ravenclaw clicked!");
	$(this).addClass( "ravenclawClicked" );
	checkWinner();
});

$(".gryffindor").click(function(){
	console.log("sanity check: gryffindor clicked!");
	$(this).addClass("gryffindorClicked");
	checkWinner();

});

		
		
function checkWinner() {
	for (var i=0; i<=allCards.length; i++);
		if (($("#ravenclawOne").hasClass("ravenclawClicked")) 
			&& ($("#ravenclawTwo").hasClass("ravenclawClicked")) 
			&& ($("#gryffindorOne").hasClass("gryffindorClicked")) 
			&& ($("#gryffindorTwo").hasClass("gryffindorClicked"))){
				$('h3').append( "YOU WON!" );
		}
		else if (($("#ravenclawOne").hasClass("ravenclawClicked")) 
			&& ($("#ravenclawTwo").hasClass("ravenclawClicked"))){
			console.log("yaaaaas! you found all the ravenclaws!");
		}
		else if (($("#gryffindorOne").hasClass("gryffindorClicked")) 
			&& ($("#gryffindorTwo").hasClass("gryffindorClicked"))){
			console.log("yaaaaas! you found all the gryffindors");
		}
		else if (($(".card").hasClass("ravenclawClicked")) 
				&& ($(".card").hasClass("gryffindorClicked"))){
				setTimeout(function(){$(".card").removeClass ("ravenclawClicked gryffindorClicked")},1000);
			
			

		}
}

		
				
	





