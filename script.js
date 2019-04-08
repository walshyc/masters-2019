var entries = [];
var scores = []


var picks = [{
        "name": "Conor Walsh",
        "id": "1",
        "selections": [
            "Jonathan Byrd",
            "Matt Kuchar",
            "Jonathan Byrd"
        ]
    },
    {
        "name": "Martin Clarke",
        "id": "2",
        "selections": [
            "Jim Furyk",
            "Padraig Harrington",
            "Aaron Baddeley"
        ]
    },
    {
        "name": "Brian Fahey",
        "id": "3",
        "selections": [
            "Jhonattan Vegas",
            "Abraham Ancer",
            "Martin Kaymer"
        ]
    }
];


$.getJSON('scores.json', function (data) {
    var totalScore;

    function getScores(name,pickOne, pickTwo, pickThree) {
        for (i = 0; i < data.Leaderboards[0].Players.length; i++) {

            if (data.Leaderboards[0].Players[i].Name === pickOne) {
                var pickOneScore = data.Leaderboards[0].Players[i].Total;
                console.log(pickOneScore);

            }

            if (data.Leaderboards[0].Players[i].Name === pickTwo) {
                var pickTwoScore = data.Leaderboards[0].Players[i].Total;
                console.log(pickTwoScore);


            }

            if (data.Leaderboards[0].Players[i].Name === pickThree) {
                var pickThreeScore = data.Leaderboards[0].Players[i].Total;
                console.log(pickThreeScore);
            }
        }
    

        totalScore = pickOneScore + pickTwoScore + pickThreeScore;
        console.log(totalScore);
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

    getScores(picks[0].name,picks[0].selections[0], picks[0].selections[1], picks[0].selections[2]);
    getScores(picks[1].name,picks[1].selections[0], picks[1].selections[1], picks[1].selections[2]);
    for (i = 0; i < scores.length; i++) {

        $("#scoreboard-row").append(
            `
            <tr>
			<td colspan="2" class="entry">${scores[i].name}</td>
			<td class="entry">${scores[i].score}</td>
		</tr>
		<tr class="hide-row">
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

