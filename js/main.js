console.log("Up and running!");

var cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png",
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png",
},
{
	rank: "king",
	suit: "hearts",
	cardImage:"images/king-of-hearts.png",
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png",
}
];

var cardsInPlay = [];

function flipCard(cardId) {
console.log("User flipped " + cards[cardId].rank)

	if (length.cardsInPlay === 2) {
}	else if (cardsInPlay[0] === cardsInPlay[1]) {
alert("You found a match!");
}	else {
	alert("Sorry, try again.")
}
}

var cardOne = cards[0];
cardsInPlay.push(cardOne);
console.log("User flipped "+cardsInPlay);

var cardTwo = cards[2];
cardsInPlay.push(cardTwo);
console.log("User flipped "+cardsInPlay);

