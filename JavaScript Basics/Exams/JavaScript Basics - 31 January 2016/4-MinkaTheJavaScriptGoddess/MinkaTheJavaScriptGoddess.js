function MinkaTheJavaScriptGoddess(input) {
    var results = {};
    input.forEach(function (str) {
        var line = str.split('&'),
            name = line[0].trim(),
            type = line[1].trim(),
            taskNumber = line[2].trim(),
            score = Number(line[3].trim()),
            lineOfCode = Number(line[4].trim());
        var task = 'Task ' + taskNumber;
        if (!results[task]) {
            results[task] = {
                tasks: [],
                average: 0,
                lines: 0,
                counter: 0
            };
        }
            results[task].tasks.push(
                {
                    name: name,
                    type: type
                }
            );
            results[task].average += score;
            results[task].lines += lineOfCode;
            results[task].counter++;

    });

    for (var task in results) {
        results[task].average = Number((results[task].average / results[task].counter).toFixed(2).replace(/\.?0+$/,''));
        delete results[task].counter;
        results[task].tasks.sort(function (p1, p2) {
            return p1.name.localeCompare(p2.name)
        })
    }

    var keysSorted = Object.keys(results).sort(function (p1, p2) {
        if (results[p2].average !== results[p1].average) {
            return results[p2].average - results[p1].average;
        }
        if (results[p1].lines !== results[p2].lines) {
            return results[p1].lines - results[p2].lines;
        }
    });

    var sortedObj = {};
    keysSorted.forEach(function (el) {
        sortedObj[el] = results[el]
    });

    console.log(JSON.stringify(sortedObj));
}

MinkaTheJavaScriptGoddess([
    'Array Matcher & strings & 4 & 100 & 38',
    'Magic Wand & draw & 3 & 100 & 15',
    'Dream Item & loops & 2 & 88 & 80',
    'Knight Path & bits & 5 & 100 & 65',
    'Basket Battle & conditionals & 2 & 100 & 120',
    'Torrent Pirate & calculations & 1 & 100 & 20',
    'Encrypted Matrix & nested loops & 4 & 90 & 52',
    'Game of bits & bits & 5 &  100 & 18',
    'Fit box in box & conditionals & 1 & 100 & 95',
    'Disk & draw & 3 & 90 & 15',
    'Poker Straight & nested loops & 4 & 40 & 57',
    'Friend Bits & bits & 5 & 100 & 81'
]);
