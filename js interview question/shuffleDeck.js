//functions to shuffle a deck of card

const shuffleDeck = () => {

    const suits = ["Spades", "Diamonds", "Club", "Heart"];
    const values = [
        "Ace",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "Jack",
        "Queen",
        "King",
    ];

    let Deck = [];

    for (let i = 0; i < suits.length; i++) {
        for (let j = 0; j < values.length; j++) {
            Deck.push({ suit: suits[i], value: values[j] })
        }
    }
    //add joker
    Deck.push({ suit: 'Joker', value: 'Red' });
    Deck.push({ suit: 'Joker', value: 'Black' });

    //check deck before shuffle
    //console.log("before shuffling: ", Deck);

    //shuffle the deck
    for (let i = Deck.length - 1; i >= 0; i--) {
        let randomIndex = Math.floor(Math.random() * Deck.length);

        //swap the current element and the random selected element
        let temp = Deck[i];
        Deck[i] = Deck[randomIndex];
        Deck[randomIndex] = temp;
    }

    return Deck;

}


console.log("the random deck: ", shuffleDeck());