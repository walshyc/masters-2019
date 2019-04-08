var scores = [];


var picks = [{
        "name": "Conor Walsh",
        "selections": [
            "Jonathan Byrd",
            "Matt Kuchar",
            "Jonathan Byrd"
        ]
    },
    {
        "name": "Martin Clarke",
        "selections": [
            "Jim Furyk",
            "Padraig Harrington",
            "Aaron Baddeley"
        ]
    },
    {
        "name": "Brian Fahey",
        "selections": [
            "Jhonattan Vegas",
            "Abraham Ancer",
            "Martin Kaymer"
        ]
    },
    {
        "name": "Peter Dravins",
        "selections": [
            "Chesson Hadley",
            "Fabián Gómez",
            "Scott Stallings"
        ]
    },
    {
        "name": "Gary Corbett",
        "selections": [
            "Wyndham Clark",
            "Hank Lebioda",
            "Danny Lee"
        ]
    },
    {
        "name": "Fergal Murphy",
        "selections": [
            "Jason Kokrak",
            "K.J. Choi",
            "Morgan Hoffmann"
        ]
    }
];


$.getJSON('https://golf.jacoduplessis.co.za/?format=json', function (data) {
    var totalScore;
    // console.log(data.Leaderboards[1].Tournament);

    function getScores(name, pickOne, pickTwo, pickThree) {
        if (data.Leaderboards[0].Tournament == "Valero Texas Open") {
            for (a = 0; a < data.Leaderboards[0].Players.length; a++) {

                if (data.Leaderboards[0].Players[a].Name === pickOne) {
                    var pickOneScore = data.Leaderboards[0].Players[a].Total;
                }

                if (data.Leaderboards[0].Players[a].Name === pickTwo) {
                    var pickTwoScore = data.Leaderboards[0].Players[a].Total;
                }

                if (data.Leaderboards[0].Players[a].Name === pickThree) {
                    var pickThreeScore = data.Leaderboards[0].Players[a].Total;
                }
            }
        } else if (data.Leaderboards[1].Tournament == "Valero Texas Open") {
            for (a = 0; a < data.Leaderboards[1].Players.length; a++) {

                if (data.Leaderboards[1].Players[a].Name === pickOne) {
                    var pickOneScore = data.Leaderboards[1].Players[a].Total;
                }

                if (data.Leaderboards[1].Players[a].Name === pickTwo) {
                    var pickTwoScore = data.Leaderboards[1].Players[a].Total;
                }

                if (data.Leaderboards[1].Players[a].Name === pickThree) {
                    var pickThreeScore = data.Leaderboards[1].Players[a].Total;
                }
            }
        } else if (data.Leaderboards[2].Tournament == "Valero Texas Open") {
            for (a = 0; a < data.Leaderboards[2].Players.length; a++) {

                if (data.Leaderboards[2].Players[a].Name === pickOne) {
                    var pickOneScore = data.Leaderboards[2].Players[a].Total;
                }

                if (data.Leaderboards[2].Players[a].Name === pickTwo) {
                    var pickTwoScore = data.Leaderboards[2].Players[a].Total;
                }

                if (data.Leaderboards[2].Players[a].Name === pickThree) {
                    var pickThreeScore = data.Leaderboards[2].Players[a].Total;
                }
            }
        }

        totalScore = pickOneScore + pickTwoScore + pickThreeScore;
        var obj = [];
        obj["name"] = name;
        obj["pickOne"] = pickOne;
        obj["pickOneScore"] = pickOneScore;
        obj["pickTwo"] = pickTwo;
        obj["pickTwoScore"] = pickTwoScore;
        obj["pickThree"] = pickThree;
        obj["pickThreeScore"] = pickThreeScore;
        obj["score"] = totalScore;
        scores.push(obj);

    }


    for (i = 0; i < picks.length; i++) {
        getScores(picks[i].name, picks[i].selections[0], picks[i].selections[1], picks[i].selections[2]);
    }
    // getScores(picks[0].name,picks[0].selections[0], picks[0].selections[1], picks[0].selections[2]);
    // getScores(picks[1].name,picks[1].selections[0], picks[1].selections[1], picks[1].selections[2]);
    for (i = 0; i < scores.length; i++) {

        $("#scoreboard-row").append(
            `
            <tr>
			<td colspan="2" class="entry">${scores[i].name}</td>
			<td class="entry">${scores[i].score}</td>
		</tr>
		<tr class="hide-row info-row">
			<td>${scores[i].pickOne} ${scores[i].pickOneScore}</td>
			<td>${scores[i].pickTwo} ${scores[i].pickTwoScore}</td>
			<td>${scores[i].pickThree} ${scores[i].pickThreeScore}</td>
		</tr>
            `
        );
    }

    $(".entry").click(function (e) {
        e.preventDefault();
        $(this).closest('tr').next().toggle("hide-row");

    });


});