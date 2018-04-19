(function() {
    var players = ["John", "Sarah", "Amber", "Seth", "Jin", "Bren", "Cathrin", "Nick"];
    var playerSelection = [];

    function addGame(e) {
        e.preventDefault();

        var isNotDefaultOption = getSelectedPlayers().indexOf("Choose a player") === -1;
        
        if (isNotDefaultOption) {
            addGameItem(generateScore());

            document.querySelectorAll(".players-selection select").forEach(function(selectItem) {
                selectItem.selectedIndex = 0;
            });
        }
    }

    function generateScore() {
        var setsPlayed = getRandomIntInclusive(2, 5);
        var setsScore = [];

        for(var i = 0; i < setsPlayed; i++) {
            var setWinner = Math.floor((Math.random() * 2) + 1 );
            // Hardcoded random score for set loser from 1 - 9
            var setLoserScore = Math.floor((Math.random() * 9) + 1 );

            if (setWinner === 1) {
                setsScore.push([11, setLoserScore])
            }
            if (setWinner === 2) {
                setsScore.push([setLoserScore, 11]);
            }
        }        

        return {
            totalScore: calculateTotalScore(setsScore),
            setsScore: setsScore
        }
    }

    function calculateTotalScore(setsScore) {
        player1Score = 0;
        player2Score = 0;
        
        setsScore.forEach(function(setScore) {            
            if (setScore[0] === 11) {
                player1Score++;
            }
            if (setScore[1] === 11) {
                player2Score++;
            }
        });

        return [player1Score, player2Score];
    }

    function addGameItem(gameScore) {
        var gameListContainerEl = document.querySelector(".game-list");
        var gameListItem = document.createElement("div");
        gameListItem.className = "game-list-item";

        gameListItem.appendChild(createGameTitle(getSelectedPlayers(), gameScore.totalScore));
        gameListItem.appendChild(createGameSets(gameScore.setsScore));
        gameListItem.appendChild(createDeleteIcon());

        if (gameListContainerEl.lastElementChild) {
            gameListContainerEl.insertBefore(gameListItem, gameListContainerEl.firstElementChild);
        } else {
            gameListContainerEl.appendChild(gameListItem);
        }
    }

    function createGameTitle(selectedPlayers, totalScore) {
        var gameTitleEl = document.createElement("div");
        gameTitleEl.className = "game-title";

        var isPlayer1Winner = totalScore[0] > totalScore[1];
        var isPlayer2Winner = totalScore[0] < totalScore[1];

        gameTitleEl.appendChild(createPlayer(selectedPlayers[0], true, isPlayer1Winner));
        gameTitleEl.appendChild(createGameTotalScore(totalScore));
        gameTitleEl.appendChild(createPlayer(selectedPlayers[1], false, isPlayer2Winner));

        return gameTitleEl;
    }

    function createGameSets(setsScore) {
        var gameSetsEl = document.createElement("div");
        gameSetsEl.className = "game-sets";

        setsScore.map(function(score) {
            var setScoreEl = document.createElement("span");
            setScoreEl.className = "game-set";
            setScoreEl.innerText = score[0] + " - " + score[1];
            gameSetsEl.appendChild(setScoreEl);
        });

        return gameSetsEl;
    }

    function createGameTotalScore(score) {
        var scoreEl = document.createElement("div");
        scoreEl.className = "game-score";
        scoreEl.innerText = score[0] + " - " + score[1];
        
        return scoreEl;
    }

    function createPlayer(name, isHomePlayer, isWinner) {
        var playerEl = document.createElement("div");
        var playerPositionClass = isHomePlayer ? "player-home" : "player-away";
        var playerWinnerClass = isWinner ? "winner" : "";
        playerEl.className = "player " + playerPositionClass + " " + playerWinnerClass;
        
        var playerThumbEl = document.createElement("img");        
        playerThumbEl.src = "img/player.png";
        playerThumbEl.className = "player-thumb";

        var playerNameEl = document.createElement("span");
        playerNameEl.className = "player-name";
        playerNameEl.innerText = name;
        
        if (isHomePlayer) {
            playerEl.appendChild(playerThumbEl);
            playerEl.appendChild(playerNameEl);
        } else {
            playerEl.appendChild(playerNameEl);
            playerEl.appendChild(playerThumbEl);
        }

        return playerEl;
    }

    function createDeleteIcon() {
        var deleteIcon = document.createElement("img");
        deleteIcon.src = "img/trash-icon.png";
        deleteIcon.className = "delete-icon";
        deleteIcon.alt = "Thrash icon";
        deleteIcon.addEventListener("click", deleteGame);

        return deleteIcon;
    }
    
    function getSelectedPlayers() {
        var selections = [];

        document.querySelectorAll(".players-selection select").forEach(function(selectItem) {
            selections.push(selectItem.value);
        });

        return selections;
    }

    function deleteGame(e) {
        e.target.parentElement.remove();            
        e.target.removeEventListener('click', function(){});
    }

    function getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    document.querySelectorAll("[data-delete-game]").forEach(function(delItem){
        delItem.addEventListener("click", deleteGame);
    });

    document.querySelectorAll(".players-selection select").forEach(function(selectItem) {
        players.forEach(function(player, index) {
            var optionEl = document.createElement("option");
            optionEl.text = player;
            optionEl.value = player;
            selectItem.add(optionEl);
        });
    });

    document.querySelector("[data-add-game]").addEventListener("submit", addGame);
})();