var entries =[];
$(document).ready(function () {
    
    $.getJSON('data.json', function (data) {
        for (i = 0; i < data.length; i++) {
            entries.push([data[i].id, data[i].name, data[i].picks[0], data[i].picks[1], data[i].picks[2]])

            $("#scoreboard-row").append(
                `
                <tr>
                    <th scope="row">${entries[i][0]}</th>
                    <td>${entries[i][1]}</td>
                    <td>${entries[i][2]}</td>
                    <td>${entries[i][3]}</td>
                    <td>${entries[i][4]}</td>
                    <td>-12</td>
                </tr>
                `
            );
        }

        console.log(entries)

        

    }
    );
});