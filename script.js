var entries =[];
$(document).ready(function () {
    
    $.getJSON('data.json', function (data) {
        for (i = 0; i < data.length; i++) {
            entries.push([data[i].name, data[i].picks[0], data[i].picks[1], data[i].picks[2]])

            $("#scoreboard-row").append(
                `
                <tr>
                    <td>${entries[i][0]}</td>
                    <td>${entries[i][1]}</td>
                    <td>${entries[i][2]}</td>
                    <td>${entries[i][3]}</td>
                    <td>-12</td>
                </tr>
                `
            );
        }

        console.log(entries)

        

    }
    );
});