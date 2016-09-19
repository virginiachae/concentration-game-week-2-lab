var data = {
	card: [
		{
			name: "ravenclawOne",
			class: "ravenclaw"
		},
		{
			name: "gryffindorOne",
			class: "gryffindor"
		},
		{
			name: "ravenclawTwo",
			class: "ravenclaw"
		},
		{
			name: "gryffindorTwo",
			class: "gryffindor"
		}	
	]
};


$(document).ready(function(){
	var source = $("#board-template").html();
	console.log('sanity check:', source);
	var template = Handlebars.compile(source);
	var cardHtml = template({card: data.card}); 
	console.log('sanity check 2:', cardHtml);
	$("#card-list").append(cardHtml); 
	}); 


$(".ravenclaw").click(function(){
	console.log("sanity check: ravenclaw clicked!");
	$(this).addClass( "ravenclawavenclawClicked" );
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
		if (($("#ravenclawOne").hasClass("ravenclawClicked")) 
			&& ($("#ravenclawTwo").hasClass("ravenclawClicked")) 
			&& ($("#gryffindorOne").hasClass("gryffindorClicked")) 
			&& ($("#gryffindorT	wo").hasClass("gryffindorClicked"))){
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

		
				
	





