$("#refresh").click(function() {
    $(this).toggleClass("down");
    window.location.reload();
});

var scores = [];


var picks = [{
        "name": "Mark Towey",
        "short": "mtowey",
        "selections": [
            "KOEPKA, Brooks",
            "LOWRY, Shane",
            "FOWLER, Rickie"
        ],
        "tiebracker":"274"
    },
    {
        "name": "Gary Corbett",
        "short": "gcorbett",
        "selections": [
            "KUCHAR, Matt",
            "WATSON, Bubba",
            "DAY, Jason"
        ],
        "tiebracker":"275"
    },
    {
        "name": "Brian Tobin",
        "short": "btobin",
        "selections": [
            "GARCIA, Sergio",
            "JOHNSON, Dustin",
            "STENSON, Henrik"
        ],
        "tiebracker":"276"
    },
    {
        "name": "Martin Clarke",
        "short": "mclarke",
        "selections": [
            "MCILROY, Rory",
            "FLEETWOOD, Tommy",
            "KISNER, Kevin"
        ],
        "tiebracker":"280"
    },
    {
        "name": "David Joyce",
        "short": "djoyce",
        "selections": [
            "MATSUYAMA, Hideki",
            "MCILROY, Rory",
            "CANTLAY, Patrick"
        ],
        "tiebracker":"275"
    },
    {
        "name": "Finian Joyce",
        "short": "fjoyce",
        "selections": [
            "LEISHMAN, Marc",
            "FLEETWOOD, Tommy",
            "KUCHAR, Matt"
        ],
        "tiebracker":"280"
    },
    {
        "name": "Monica Joyce",
        "short": "mjoyce",
        "selections": [
            "MCILROY, Rory",
            "CASEY, Paul",
            "KISNER, Kevin"
        ],
        "tiebracker":"280"
    },
    {
        "name": "Eamonn Fahey",
        "short": "efahey1",
        "selections": [
            "MCILROY, Rory",
            "KISNER, Kevin",
            "DECHAMBEAU, Bryson"
        ],
        "tiebracker":"279"
    },
    {
        "name": "Eamonn Fahey",
        "short": "efahey2",
        "selections": [
            "GARCIA, Sergio",
            "FLEETWOOD, Tommy",
            "CASEY, Paul"
        ],
        "tiebracker":"278"
    },
    
    {
        "name": "Brian Fahey",
        "short": "bfahey",
        "selections": [
            "MCILROY, Rory",
            "WOODS, Tiger",
            "WILLETT, Danny"
        ],
        "tiebracker":"279"
    },
    {
        "name": "Peter Dravins",
        "short": "pdravins",
        "selections": [
            "JOHNSON, Dustin",
            "KOEPKA, Brooks",
            "WOODLAND, Gary"
        ],
        "tiebracker":"277"
    },
    {
        "name": "Conor Walsh",
        "short": "cwalsh",
        "selections": [
            "MCILROY, Rory",
            "MATSUYAMA, Hideki",
            "KIM, Si Woo"
        ],
        "tiebracker":"281"
    },
    {
        "name": "James McGauran",
        "short": "jmcguaran",
        "selections": [
            "MCILROY, Rory",
            "MOLINARI, Francesco",
            "SMITH, Cameron"
        ],
        "tiebracker":"270"
    },
    {
        "name": "Jimmy O'Boyle",
        "short": "joboyle",
        "selections": [
            "KOEPKA, Brooks",
            "FINAU, Tony",
            "SCHAUFFELE, Xander"
        ],
        "tiebracker":"280"
    },
    {
        "name": "Steve Jordan",
        "short": "sjordan",
        "selections": [
            "MCILROY, Rory",
            "SPIETH, Jordan",
            "FITZPATRICK, Matthew"
        ],
        "tiebracker":"278"
    },
    {
        "name": "Gerry Walsh",
        "short": "gwalsh",
        "selections": [
            "LEISHMAN, Marc",
            "SCOTT, Adam",
            "MATSUYAMA, Hideki"
        ],
        "tiebracker":"284"
    },
    {
        "name": "Albert Dravins",
        "short": "adravins",
        "selections": [
            "FLEETWOOD, Tommy",
            "KISNER, Kevin",
            "CASEY, Paul"
        ],
        "tiebracker":"278"
    },
    {
        "name": "Aidan Walsh",
        "short": "awalsh",
        "selections": [
            "OLESEN, Thorbjørn",
            "MOLINARI, Francesco",
            "KOEPKA, Brooks"
        ],
        "tiebracker":"276"
    }
];


$.getJSON('https://golf.jacoduplessis.co.za/?format=json', function (data) {
    var totalScore;
    // console.log(data.Leaderboards[1].Tournament);

    function getScores(name,short, pickOne, pickTwo, pickThree) {
        if (data.Leaderboards[0].Tour == "European Tour") {
            for (a = 0; a < data.Leaderboards[0].Players.length; a++) {

                if (data.Leaderboards[0].Players[a].Name === pickOne) {
                    var pickOneScore = data.Leaderboards[0].Players[a].Total;
                    var pickOnePosition =data.Leaderboards[0].Players[a].CurrentPosition;
                    var pickOneAfter =data.Leaderboards[0].Players[a].After;
                }

                if (data.Leaderboards[0].Players[a].Name === pickTwo) {
                    var pickTwoScore = data.Leaderboards[0].Players[a].Total;
                    var pickTwoPosition =data.Leaderboards[0].Players[a].CurrentPosition;
                    var pickTwoAfter =data.Leaderboards[0].Players[a].After;
                }

                if (data.Leaderboards[0].Players[a].Name === pickThree) {
                    var pickThreeScore = data.Leaderboards[0].Players[a].Total;
                    var pickThreePosition =data.Leaderboards[0].Players[a].CurrentPosition;
                    var pickThreeAfter =data.Leaderboards[0].Players[a].After;
                }
            }
        } else if (data.Leaderboards[1].Tour == "European Tour") {
            for (a = 0; a < data.Leaderboards[1].Players.length; a++) {

                if (data.Leaderboards[1].Players[a].Name === pickOne) {
                    var pickOneScore = data.Leaderboards[1].Players[a].Total;
                    var pickOnePosition = data.Leaderboards[1].Players[a].CurrentPosition;
                    var pickOneAfter =data.Leaderboards[1].Players[a].After;
                }

                if (data.Leaderboards[1].Players[a].Name === pickTwo) {
                    var pickTwoScore = data.Leaderboards[1].Players[a].Total;
                    var pickTwoPosition =data.Leaderboards[1].Players[a].CurrentPosition;
                    var pickTwoAfter =data.Leaderboards[1].Players[a].After;
                }

                if (data.Leaderboards[1].Players[a].Name === pickThree) {
                    var pickThreeScore = data.Leaderboards[1].Players[a].Total;
                    var pickThreePosition =data.Leaderboards[1].Players[a].CurrentPosition;
                    var pickThreeAfter =data.Leaderboards[1].Players[a].After;
                }
            }
        } else if (data.Leaderboards[2].Tour == "European Tour") {
            for (a = 0; a < data.Leaderboards[2].Players.length; a++) {

                if (data.Leaderboards[2].Players[a].Name === pickOne) {
                    var pickOneScore = data.Leaderboards[2].Players[a].Total;
                    var pickOnePosition = data.Leaderboards[2].Players[a].CurrentPosition;
                    var pickOneAfter =data.Leaderboards[2].Players[a].After;
                }

                if (data.Leaderboards[2].Players[a].Name === pickTwo) {
                    var pickTwoScore = data.Leaderboards[2].Players[a].Total;
                    var pickTwoPosition =data.Leaderboards[2].Players[a].CurrentPosition;
                    var pickTwoAfter =data.Leaderboards[2].Players[a].After;
                }

                if (data.Leaderboards[2].Players[a].Name === pickThree) {
                    var pickThreeScore = data.Leaderboards[2].Players[a].Total;
                    var pickThreePosition =data.Leaderboards[2].Players[a].CurrentPosition;
                    var pickThreeAfter =data.Leaderboards[2].Players[a].After;
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
        obj["pickTwo"] = pickTwo;
        obj["pickTwoScore"] = pickTwoScore;
        obj["pickTwoPosition"] = pickTwoPosition;
        obj["pickTwoAfter"] = pickTwoAfter;
        obj["pickThree"] = pickThree;
        obj["pickThreeScore"] = pickThreeScore;
        obj["pickThreePosition"] = pickThreePosition;
        obj["pickThreeAfter"] = pickThreeAfter;
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
                  <table class="table">
                  <thead class="table-header">   
                  <tr>
                            <th>${scores[i].name}</th>
                            <th>Score</th>
                            <th>Thru</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>${scores[i].pickOne}</td>
                            <td>${scores[i].pickOneScore}</td>
                            <td>${scores[i].pickOneAfter}</td>
                        </tr>
                        <tr>
                            <td>${scores[i].pickTwo}</td>
                            <td>${scores[i].pickTwoScore}</td>
                            <td>${scores[i].pickTwoAfter}</td>
                        </tr>
                        <tr>
                            <td>${scores[i].pickThree}</td>
                            <td>${scores[i].pickThreeScore}</td>
                            <td>${scores[i].pickThreeAfter}</td>
                        </tr>
                        </tbody>
                        </table>
                    
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
    
    // $(".entry").click(function (e) {
    //     e.preventDefault();
    //     $('.hide-row').slideToggle("slow");
        
    // });

 
 
  
    // var newTableObject = document.getElementById("#scoreboard");
    // sorttable.makeSortable(newTableObject);
});

//<tr>
//			<td colspan="2" class="entry dontsort">${scores[i].name}</td>
//			<td class="entry">${scores[i].score}</td>
//		</tr>
//		<tr class="hide-row info-row">
//			<td>${scores[i].pickOnePosition} ${scores[i].pickOne} ${scores[i].pickOneScore}</td>
//			<td>${scores[i].pickTwoPosition} ${scores[i].pickTwo} ${scores[i].pickTwoScore}</td>
//			<td>${scores[i].pickThreePosition} ${scores[i].pickThree} ${scores[i].pickThreeScore}</td>
//		</tr>