const enum CardValue {
    ACE = "A",
    TWO = "2",
    THREE = "3",
    FOUR = "4",
    FIVE = "5",
    SIX = "6",
    SEVEN = "7",
    EIGHT = "8",
    NINE = "9",
    TEN = "10",
    JACK = "J",
    QUEEN = "Q",
    KING = "K",
};

function successor(val: CardValue): CardValue {
    switch (val) {
        case CardValue.ACE: return CardValue.TWO;
        case CardValue.TWO: return CardValue.THREE;
        case CardValue.THREE: return CardValue.FOUR;
        case CardValue.FOUR: return CardValue.FIVE;
        case CardValue.FIVE: return CardValue.SIX;
        case CardValue.SIX: return CardValue.SEVEN;
        case CardValue.SEVEN: return CardValue.EIGHT;
        case CardValue.EIGHT: return CardValue.NINE;
        case CardValue.NINE: return CardValue.TEN;
        case CardValue.TEN: return CardValue.JACK;
        case CardValue.JACK: return CardValue.QUEEN;
        case CardValue.QUEEN: return CardValue.KING;
        case CardValue.KING: return CardValue.ACE;
    }
}

console.log(successor(CardValue.SEVEN));
