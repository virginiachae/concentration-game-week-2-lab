var data = {
	cards: [
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


function Card(cardName) {
	this.name = cardName;
}

Card.prototype.faceDown = function(){
	$(document).ready(function(){
		var source = $("#board-template").html();
		console.log('sanity check:', source);
		var template = Handlebars.compile(source);
		var cardHtml = template({card: data.cards}); 
		console.log('sanity check 2:', cardHtml);
		$("#card-list").append(cardHtml); 
		}); 
}

var allCards = []
for (var i =0; i<data.cards.length; i++){
	new Card("data.cards[i].name");
	allCards.push(new Card(data.cards[i].name));
}
