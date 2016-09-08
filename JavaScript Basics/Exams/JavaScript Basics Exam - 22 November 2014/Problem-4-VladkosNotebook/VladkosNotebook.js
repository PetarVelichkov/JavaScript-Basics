function VladkosNotebook(input) {
    var notebook = {};
    input.forEach(function (s) {
        var line = s.split('|');
        var color = line[0];
        var keyWord = line[1];
        var value = line[2];

        if (!notebook[color]) {
            notebook[color] = {
                age: undefined,
                name: undefined,
                opponents: [],
                wins: 0,
                losses: 0,
                rank: 1
            };
            if (keyWord === 'age') {
                notebook[color].age = value;
            } else if (keyWord === 'name') {
                notebook[color].name = value;
            } else if (keyWord === 'win') {
                notebook[color].wins = 1;
                notebook[color].losses = 0;
                notebook[color].opponents.push(value);
            } else if (keyWord === 'loss') {
                notebook[color].losses = 1;
                notebook[color].wins = 0;
                notebook[color].opponents.push(value);
            }
        } else {
            if (keyWord === 'age') {
                notebook[color].age = value;
            } else if (keyWord === 'name') {
                notebook[color].name = value;
            } else if (keyWord === 'win') {
                notebook[color].wins += 1;
                notebook[color].opponents.push(value);
            } else if (keyWord === 'loss') {
                notebook[color].losses += 1;
                notebook[color].opponents.push(value);
            }
        }
    });

    notebook = sortObjectProperties(notebook);
    for (var index in notebook) {
        if (notebook[index].age === undefined || notebook[index].name === undefined) {
            delete notebook[index];
            continue;
        }
        notebook[index].opponents = notebook[index].opponents.sort(function (p1, p2) {
            if (p1 !== p2) {
                return p1.localeCompare(p2);
            }
        });
        notebook[index].rank = ((notebook[index].wins + 1) / (notebook[index].losses + 1)).toFixed(2);
        delete notebook[index].wins;
        delete notebook[index].losses;
    }
    console.log(JSON.stringify(notebook));

    function sortObjectProperties(obj) {
        var keysSorted = Object.keys(obj).sort();
        var sortedObj = {};
        for (var i = 0; i < keysSorted.length; i++) {
            var key = keysSorted[i];
            sortedObj[key] = obj[key];
        }
        return sortedObj;
    }
}
//(wins+1) / (losses+1)
VladkosNotebook([
    'purple|age|99',
    'red|age|44',
    'blue|win|pesho',
    'blue|win|mariya',
    'purple|loss|Kiko',
    'purple|loss|Kiko',
    'purple|loss|Kiko',
    'purple|loss|Yana',
    'purple|loss|Yana',
    'purple|loss|Manov',
    'purple|loss|Manov',
    'red|name|gosho',
    'blue|win|Vladko',
    'purple|loss|Yana',
    'purple|name|VladoKaramfilov',
    'blue|age|21',
    'blue|loss|Pesho'
]);
