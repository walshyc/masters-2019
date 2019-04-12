$("#refresh").click(function () {
    $(this).toggleClass("down");
    window.location.reload();
});

var scores = [];

var cutScore =148;

var picks = [{
        "name": "Mark Towey",
        "short": "mtowey",
        "selections": [
            "KOEPKA, Brooks",
            "LOWRY, Shane",
            "FOWLER, Rickie"
        ],
        "tiebracker": "274"
    },
    {
        "name": "Gary Corbett",
        "short": "gcorbett",
        "selections": [
            "KUCHAR, Matt",
            "WATSON, Bubba",
            "DAY, Jason"
        ],
        "tiebracker": "275"
    },
    {
        "name": "Brian Tobin",
        "short": "btobin",
        "selections": [
            "GARCIA, Sergio",
            "JOHNSON, Dustin",
            "STENSON, Henrik"
        ],
        "tiebracker": "276"
    },
    {
        "name": "Martin Clarke",
        "short": "mclarke",
        "selections": [
            "MCILROY, Rory",
            "FLEETWOOD, Tommy",
            "KISNER, Kevin"
        ],
        "tiebracker": "280"
    },
    {
        "name": "David Joyce",
        "short": "djoyce",
        "selections": [
            "MATSUYAMA, Hideki",
            "MCILROY, Rory",
            "CANTLAY, Patrick"
        ],
        "tiebracker": "275"
    },
    {
        "name": "Finian Joyce",
        "short": "fjoyce",
        "selections": [
            "LEISHMAN, Marc",
            "FLEETWOOD, Tommy",
            "KUCHAR, Matt"
        ],
        "tiebracker": "280"
    },
    {
        "name": "Monica Joyce",
        "short": "mjoyce",
        "selections": [
            "MCILROY, Rory",
            "CASEY, Paul",
            "KISNER, Kevin"
        ],
        "tiebracker": "280"
    },
    {
        "name": "Eamonn Fahey",
        "short": "efahey1",
        "selections": [
            "MCILROY, Rory",
            "KISNER, Kevin",
            "DECHAMBEAU, Bryson"
        ],
        "tiebracker": "279"
    },
    {
        "name": "Eamonn Fahey",
        "short": "efahey2",
        "selections": [
            "GARCIA, Sergio",
            "FLEETWOOD, Tommy",
            "CASEY, Paul"
        ],
        "tiebracker": "278"
    },

    {
        "name": "Brian Fahey",
        "short": "bfahey",
        "selections": [
            "MCILROY, Rory",
            "WOODS, Tiger",
            "WILLETT, Danny"
        ],
        "tiebracker": "279"
    },
    {
        "name": "Peter Dravins",
        "short": "pdravins",
        "selections": [
            "JOHNSON, Dustin",
            "KOEPKA, Brooks",
            "WOODLAND, Gary"
        ],
        "tiebracker": "277"
    },
    {
        "name": "Conor Walsh",
        "short": "cwalsh",
        "selections": [
            "MCILROY, Rory",
            "MATSUYAMA, Hideki",
            "KIM, Si Woo"
        ],
        "tiebracker": "281"
    },
    {
        "name": "James McGauran",
        "short": "jmcguaran",
        "selections": [
            "MCILROY, Rory",
            "MOLINARI, Francesco",
            "SMITH, Cameron"
        ],
        "tiebracker": "270"
    },
    {
        "name": "Jimmy O'Boyle",
        "short": "joboyle",
        "selections": [
            "KOEPKA, Brooks",
            "FINAU, Tony",
            "SCHAUFFELE, Xander"
        ],
        "tiebracker": "280"
    },
    {
        "name": "Steve Jordan",
        "short": "sjordan",
        "selections": [
            "MCILROY, Rory",
            "SPIETH, Jordan",
            "FITZPATRICK, Matthew"
        ],
        "tiebracker": "278"
    },
    {
        "name": "Gerry Walsh",
        "short": "gwalsh",
        "selections": [
            "LEISHMAN, Marc",
            "SCOTT, Adam",
            "MATSUYAMA, Hideki"
        ],
        "tiebracker": "284"
    },
    {
        "name": "Albert Dravins",
        "short": "adravins",
        "selections": [
            "FLEETWOOD, Tommy",
            "KISNER, Kevin",
            "CASEY, Paul"
        ],
        "tiebracker": "278"
    },
    {
        "name": "Aidan Walsh",
        "short": "awalsh",
        "selections": [
            "OLESEN, Thorbjørn",
            "MOLINARI, Francesco",
            "KOEPKA, Brooks"
        ],
        "tiebracker": "276"
    }
];


$.getJSON('https://golf.jacoduplessis.co.za/?format=json', function (data) {
    var totalScore;
    // console.log(data.Leaderboards[1].Tournament);

    function getScores(name, short, pickOne, pickTwo, pickThree) {
        for (x = 0; x < data.Leaderboards.length; x++) {
            if (data.Leaderboards[x].Tour == "European Tour") {
                for (a = 0; a < data.Leaderboards[x].Players.length; a++) {

                    if (data.Leaderboards[x].Players[a].Name === pickOne) {
                        if (data.Leaderboards[x].Players[a].Rounds[0] + data.Leaderboards[x].Players[a].Rounds[1] >= cutScore) {
                            var pickOneScore = (data.Leaderboards[x].Players[a].Total + 10);
                        } else {
                            var pickOneScore = data.Leaderboards[x].Players[a].Total;
                        }
                        var pickOnePosition = data.Leaderboards[x].Players[a].CurrentPosition;
                        var pickOneAfter = data.Leaderboards[x].Players[a].After;
                        var pickOneToday = data.Leaderboards[x].Players[a].Today;                         
                    }

                    if (data.Leaderboards[x].Players[a].Name === pickTwo) {
                        if (data.Leaderboards[x].Players[a].Rounds[0] + data.Leaderboards[x].Players[a].Rounds[1] >= cutScore) {
                            var pickTwoScore = (data.Leaderboards[x].Players[a].Total + 10);
                        } else {
                            var pickTwoScore = data.Leaderboards[x].Players[a].Total;
                        }
                        var pickTwoPosition = data.Leaderboards[x].Players[a].CurrentPosition;
                        var pickTwoAfter = data.Leaderboards[x].Players[a].After;
                        var pickTwoToday = data.Leaderboards[x].Players[a].Today;
                    }

                    if (data.Leaderboards[x].Players[a].Name === pickThree) {
                        if (data.Leaderboards[x].Players[a].Rounds[0] + data.Leaderboards[x].Players[a].Rounds[1] >= cutScore) {
                            var pickThreeScore = (data.Leaderboards[x].Players[a].Total + 10);
                        } else {
                            var pickThreeScore = data.Leaderboards[x].Players[a].Total;
                        }
                        var pickThreePosition = data.Leaderboards[x].Players[a].CurrentPosition;
                        var pickThreeAfter = data.Leaderboards[x].Players[a].After;
                        var pickThreeToday = data.Leaderboards[x].Players[a].Today;
                    }
                }
            }
        }

        totalScore = pickOneScore + pickTwoScore + pickThreeScore;
        var totalScoreInt = parseInt(totalScore);
        var obj = [];
        obj["name"] = name;
        obj["short"] = short;
        obj["pickOne"] = pickOne;
        obj["pickOneScore"] = pickOneScore;
        obj["pickOnePosition"] = pickOnePosition;
        obj["pickOneAfter"] = pickOneAfter;
        obj["pickOneToday"] = pickOneToday;
        obj["pickTwo"] = pickTwo;
        obj["pickTwoScore"] = pickTwoScore;
        obj["pickTwoPosition"] = pickTwoPosition;
        obj["pickTwoAfter"] = pickTwoAfter;
        obj["pickTwoToday"] = pickTwoToday;
        obj["pickThree"] = pickThree;
        obj["pickThreeScore"] = pickThreeScore;
        obj["pickThreePosition"] = pickThreePosition;
        obj["pickThreeAfter"] = pickThreeAfter;
        obj["pickThreeToday"] = pickThreeToday;
        obj["score"] = totalScoreInt;
        scores.push(obj);

    }
    console.log(scores);

    for (i = 0; i < picks.length; i++) {
        getScores(picks[i].name, picks[i].short, picks[i].selections[0], picks[i].selections[1], picks[i].selections[2]);
    }

    for (i = 0; i < scores.length; i++) {

        $("#scoreboard-row").append(
            `
                <tr data-toggle="modal" data-target="#${scores[i].short}-Modal" >
                    <td class="entry">${scores[i].name}</td>
                    <td class="entry">${scores[i].score}</td>
                </tr>
                
            
            `

        );

        $("#modals").append(
            `<div id="${scores[i].short}-Modal" class="modal fade" role="dialog">
              <div class="modal-dialog">
            
                <!-- Modal content-->
                <div class="modal-content">
                 
                  <div class="modal-body">
                  <div class="table-responsive">
                  <table class="table indTable">
                  <thead class="table-header">   
                  <tr>
                            <th>Position</th>
                            <th>${scores[i].name}</th>
                            <th>Today</th>
                            <th>Thru</th>
                            <th data-sort="int" data-sort-onload=yes>Total</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>${scores[i].pickOnePosition}</td>
                            <td>${scores[i].pickOne}</td>
                            <td>${scores[i].pickOneToday}</td>
                            <td>${scores[i].pickOneAfter}</td>
                            <td>${scores[i].pickOneScore}</td>
                        </tr>
                        <tr>
                            <td>${scores[i].pickTwoPosition}</td>
                            <td>${scores[i].pickTwo}</td>
                            <td>${scores[i].pickTwoToday}</td>
                            <td>${scores[i].pickTwoAfter}</td>
                            <td>${scores[i].pickTwoScore}</td>
                        </tr>
                        <tr>
                            <td>${scores[i].pickThreePosition}</td>
                            <td>${scores[i].pickThree}</td>
                            <td>${scores[i].pickThreeToday}</td>
                            <td>${scores[i].pickThreeAfter}</td>
                            <td>${scores[i].pickThreeScore}</td>
                        </tr>
                        </tbody>
                        </table>
                        </div>
                    
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                  </div>
                </div>
            
              </div>
            </div>
            
            `
        )



    }


    $("#scoreboard").stupidtable();
    $(".indTable").stupidtable();
    


});