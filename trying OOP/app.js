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
	var allCards = $(".card");
	for (var i=0; i<=allCards.length; i++);
		if (($(".card").hasClass("ravenclawClicked")) 
			&& ($("#ravenclawTwo").hasClass("ravenclawClicked")) 
			&& ($(".card").hasClass("gryffindorClicked")) 
			&& ($("#gryffindorTwo").hasClass("gryffindorClicked"))){
			window.alert("GAME OVER!")
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
			window.alert('Not a match! Please try again!');
			$(".card").removeClass ("ravenclawClicked gryffindorClicked")
		}
}

		
				
	





