const calculateTotalScore = (setsScore) => {
    const player1Score = setsScore.reduce((score, setScore) => {
        if (setScore[0] === 11) {
            return score + 1;
        }
        return score;
    }, 0);

    const player2Score = setsScore.reduce((score, setScore) => {
        if (setScore[1] === 11) {
            return score + 1;
        }
        return score;
    }, 0);

    return [player1Score, player2Score];
}

const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export { calculateTotalScore, getRandomIntInclusive };