$(".ravenclaw").click(function(){
	console.log("sanity check: ravenclaw clicked!");
	$(this).css('background', '#272892');
	$(this).addClass( "ravenclawClicked" );
	if (($("#ravenclawOne").hasClass("ravenclawClicked")) && ($("#ravenclawTwo").hasClass("ravenclawClicked"))){
	console.log("yaaaaas! you found all the ravenclaws!");
	checkWinner();
	}
});

$(".gryffindor").click(function(){
	console.log("sanity check: gryffindor clicked!");
	$(this).css('background', '#db4536');
	$(this).addClass("gryffindorClicked");
	if (($("#gryffindorOne").hasClass("gryffindorClicked")) && ($("#gryffindorTwo").hasClass("gryffindorClicked"))){
	console.log("yaaaaas! you found all the gryffindors");
	checkWinner()
	}
});

function checkWinner() {
	var allCards = $(".card");
	for (var i=0; i<allCards.lenth; i++);
		if (($("#ravenclawOne").hasClass("ravenclawClicked")) 
			&& ($("#ravenclawTwo").hasClass("ravenclawClicked")) 
			&& ($("#gryffindorOne").hasClass("gryffindorClicked")) 
			&& ($("#gryffindorTwo").hasClass("gryffindorClicked"))){
			window.alert("GAME OVER!")
		}
		else ()
}


