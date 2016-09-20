function Card($el, img) {
	this.ele = $el;
	this.image = img;
}
var allCards = []

var cards = [
	{
		$el: '$("#ravenclawOne")',
		img: 'ravenclawpic.jpg'
	},

	{
		$el: $('#gryffindorOne'),
		img: 'gryffindorpic.jpg'
	},
		{
		$el: $('#ravenclawOne'),
		img: 'ravenclawpic.jpg'
	},
	{
		$el: $('#gryffindorTwo'),
		img: 'gryffindorpic.jpg'
	}	
];


for (var i =0; i<cards.length; i++){
	new Card ('cards[i].name');
	allCards.push(new Card(cards[i].$el, cards[i].img));
};

for (var i =0; i<allCards.length; i++){
	//how do I get allCards[i].ele to be defined? 
	allCards[i].ele.click(function() {
		console.log('sanity check: clicked!')
		allCards[i].ele.html('<img src="' + allCards[i].image + '" >')
	});	
	};





/** characters.forEach(function(character){
 +    character.$el.click(function() {
 +      $character_target.html('<img src="' + character.img + '">');
 +    })*/