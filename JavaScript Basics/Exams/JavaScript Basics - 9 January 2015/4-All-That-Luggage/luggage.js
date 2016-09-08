function luggage(input) {
    var allLuggage = {};
    var sorting = input[input.length - 1],
        type;
    for (var i = 0; i < input.length - 1; i++) {
        var line = input[i].split(/[\.]*\*[\.]*/g);
        var ownerName = line[0];
        var luggageName = line[1];
        var isFood = line[2];
        var isDrink = line[3];
        var isFragile = line[4];
        var weight = Number(line[5]);
        var transferred = line[6];

        if (isFragile === 'true') {
            isFragile = true;
        } else {
            isFragile = false;
        }
        if (isFood === 'true') {
            type = 'food'
        } else if (isDrink === 'true') {
            type = 'drink'
        } else {
            type = 'other'
        }

        if (!allLuggage[ownerName]) {
            allLuggage[ownerName] = {};
            if (!allLuggage[ownerName][luggageName]) {
                allLuggage[ownerName][luggageName] = {
                    kg: weight,
                    fragile: isFragile,
                    type: type,
                    transferredWith: transferred
                }
            } else {
                allLuggage[ownerName][luggageName].kg = weight;
                allLuggage[ownerName][luggageName].fragile = isFragile;
                allLuggage[ownerName][luggageName].type = type;
                allLuggage[ownerName][luggageName].transferredWith = transferred;
            }
        } else {
            if (!allLuggage[ownerName][luggageName]) {
                allLuggage[ownerName][luggageName] = {
                    kg: weight,
                    fragile: isFragile,
                    type: type,
                    transferredWith: transferred
                }
            } else {
                allLuggage[ownerName][luggageName].kg = weight;
                allLuggage[ownerName][luggageName].fragile = isFragile;
                allLuggage[ownerName][luggageName].type = type;
                allLuggage[ownerName][luggageName].transferredWith = transferred;
            }
        }
    }
    
    if (sorting === 'strict') {
        console.log(JSON.stringify(allLuggage));
    } else if (sorting === 'luggage name') {
        for (var key in allLuggage) {
            allLuggage[key] = sortObjectProperties(allLuggage[key]);
        }
        console.log(JSON.stringify(allLuggage));
    } else if (sorting === 'weight') {
        //var outputKgSort = {};
        //Object.keys(allLuggage).forEach(function(key) {
        //    outputKgSort[key]={};
        //    var a = Object.keys(allLuggage[key]).sort(function (a,b) {
        //        return allLuggage[key][a].kg- allLuggage[key][b].kg;
        //    });
        //    a.forEach(function (value) {
        //        outputKgSort[key][value] = allLuggage[key][value];
        //    })
        //});
        var outputSort = {};
        for (var key in allLuggage) {
            outputSort[key] = {};
            var obj = Object.keys(allLuggage[key]).sort(function (p1, p2) {
                return allLuggage[key][p1].kg - allLuggage[key][p2].kg;
            });
            for (var i = 0; i < obj.length; i++) {
                var value = obj[i];
                outputSort[key][value] = allLuggage[key][value];
            }
        }
        console.log(JSON.stringify(outputSort));
    }

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

luggage([
    'Yana Slavcheva.*.clothes.*.false.*.false.*.false.*.2.2.*.backpack',
    'Kiko.*.socks.*.false.*.false.*.false.*.0.2.*.backpack',
    'Kiko.*.banana.*.true.*.false.*.false.*.3.2.*.backpack',
    'Kiko.*.sticks.*.false.*.false.*.false.*.1.6.*.ATV',
    'Kiko.*.glasses.*.false.*.false.*.true.*.3.*.ATV',
    'Manov.*.socks.*.false.*.false.*.false.*.0.3.*.ATV',
    'weight'
]);
