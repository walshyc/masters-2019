var scores = [];
var picks = [{
        "name": "Mark Towey",
        "selections": [
            "Brooks Koepka",
            "Shane Lowry",
            "Rickie Fowler"
        ],
        "tiebracker": "274"
    },
    {
        "name": "Gary Corbett",
        "selections": [
            "Matt Kuchar",
            "Bubba Watson",
            "Jason Day"
        ],
        "tiebracker": "275"
    },
    {
        "name": "Brian Tobin",
        "selections": [
            "Sergio Garcia",
            "Dustin Johnson",
            "Henrik Stenson"
        ],
        "tiebracker": "276"
    },
    {
        "name": "Martin Clarke",
        "selections": [
            "Rory McIlroy",
            "Tommy Fleetwood",
            "Kevin Kisner"
        ],
        "tiebracker": "280"
    }
];

$.getJSON('https://golf.jacoduplessis.co.za/?format=json', function (data) {
    var totalScore;
    // console.log(data.Leaderboards[1].Tournament);

    function getScores(name, pickOne, pickTwo, pickThree) {
        if (data.Leaderboards[0].Tournament == "The Masters") {
            for (a = 0; a < data.Leaderboards[0].Players.length; a++) {

                if (data.Leaderboards[0].Players[a].Name === pickOne) {
                    var pickOneScore = data.Leaderboards[0].Players[a].Total;
                    var pickOnePosition = data.Leaderboards[0].Players[a].CurrentPosition;
                }

                if (data.Leaderboards[0].Players[a].Name === pickTwo) {
                    var pickTwoScore = data.Leaderboards[0].Players[a].Total;
                    var pickTwoPosition = data.Leaderboards[0].Players[a].CurrentPosition;
                }

                if (data.Leaderboards[0].Players[a].Name === pickThree) {
                    var pickThreeScore = data.Leaderboards[0].Players[a].Total;
                    var pickThreePosition = data.Leaderboards[0].Players[a].CurrentPosition;
                }
            }
        } else if (data.Leaderboards[1].Tournament == "The Masters") {
            for (a = 0; a < data.Leaderboards[1].Players.length; a++) {

                if (data.Leaderboards[1].Players[a].Name === pickOne) {
                    var pickOneScore = data.Leaderboards[1].Players[a].Total;
                    var pickOnePosition = data.Leaderboards[0].Players[a].CurrentPosition;
                }

                if (data.Leaderboards[1].Players[a].Name === pickTwo) {
                    var pickTwoScore = data.Leaderboards[1].Players[a].Total;
                    var pickTwoPosition = data.Leaderboards[0].Players[a].CurrentPosition;
                }

                if (data.Leaderboards[1].Players[a].Name === pickThree) {
                    var pickThreeScore = data.Leaderboards[1].Players[a].Total;
                    var pickThreePosition = data.Leaderboards[0].Players[a].CurrentPosition;
                }
            }
        } else if (data.Leaderboards[2].Tournament == "The Masters") {
            for (a = 0; a < data.Leaderboards[2].Players.length; a++) {

                if (data.Leaderboards[2].Players[a].Name === pickOne) {
                    var pickOneScore = data.Leaderboards[2].Players[a].Total;
                    var pickOnePosition = data.Leaderboards[0].Players[a].CurrentPosition;
                }

                if (data.Leaderboards[2].Players[a].Name === pickTwo) {
                    var pickTwoScore = data.Leaderboards[2].Players[a].Total;
                    var pickTwoPosition = data.Leaderboards[0].Players[a].CurrentPosition;
                }

                if (data.Leaderboards[2].Players[a].Name === pickThree) {
                    var pickThreeScore = data.Leaderboards[2].Players[a].Total;
                    var pickThreePosition = data.Leaderboards[0].Players[a].CurrentPosition;
                }
            }
        }

        totalScore = pickOneScore + pickTwoScore + pickThreeScore;
        var totalScoreInt = parseInt(totalScore);
        var obj = [];
        obj["name"] = name;
        obj["pickOne"] = pickOne;
        obj["pickOneScore"] = pickOneScore;
        obj["pickOnePosition"] = pickOnePosition;
        obj["pickTwo"] = pickTwo;
        obj["pickTwoScore"] = pickTwoScore;
        obj["pickTwoPosition"] = pickTwoPosition;
        obj["pickThree"] = pickThree;
        obj["pickThreeScore"] = pickThreeScore;
        obj["pickThreePosition"] = pickThreePosition;
        obj["score"] = totalScoreInt;
        scores.push(obj);
    }


    for (i = 0; i < picks.length; i++) {
        getScores(picks[i].name, picks[i].selections[0], picks[i].selections[1], picks[i].selections[2]);
    }

    for (i = 0; i < scores.length; i++) {

        $("#scoreboard-row").append(
            `
            <tr>
			<td colspan="2" class="entry dontsort">${scores[i].name}</td>
			<td class="entry">${scores[i].score}</td>
		</tr>
		<tr class="hide-row info-row">
			<td>${scores[i].pickOne} ${scores[i].pickOneScore}<br>Thru:${scores[i].pickOnePosition} </td>
			<td>${scores[i].pickTwo} ${scores[i].pickTwoScore}<br>Thru:${scores[i].pickTwoPosition}</td>
			<td>${scores[i].pickThree} ${scores[i].pickThreeScore}<br>Thru:${scores[i].pickThreePosition}</td>
		</tr>
            `
        );
    }


    $(".entry").click(function (e) {
        e.preventDefault();
        $(this).closest('tr').next().toggle("hide-row");
    });


    // var newTableObject = document.getElementById("#scoreboard");
    // sorttable.makeSortable(newTableObject);
});