var golfers = [];
$.getJSON('https://golf.jacoduplessis.co.za/?format=json', function (data) {

    if (data.Leaderboards[0].Tournament == "The Masters") {

        golfers = data.Leaderboards[0].Players.map(function (item) {
            return item.Name;
        });
    } else if (data.Leaderboards[1].Tournament == "The Masters") {

        golfers = data.Leaderboards[1].Players.map(function (item) {
            return item.Name;
        });
    } else if (data.Leaderboards[2].Tournament == "The Masters") {

        golfers = data.Leaderboards[2].Players.map(function (item) {
            return item.Name;
        });
    }

    var selectBoxOne = document.getElementById('entryOne');

    for (var i = 0, l = golfers.length; i < l; i++) {
        var option = golfers[i];
        selectBoxOne.options.add(new Option(option));
    }

    var selectBoxTwo = document.getElementById('entryTwo');

    for (var i = 0, l = golfers.length; i < l; i++) {
        var option = golfers[i];
        selectBoxTwo.options.add(new Option(option));
    }

    var selectBoxThree = document.getElementById('entryThree');

    for (var i = 0, l = golfers.length; i < l; i++) {
        var option = golfers[i];
        selectBoxThree.options.add(new Option(option));
    }




});