function concert(input) {
    var band, town, venues;
    var concerts = {};
    input.forEach(function (str) {
        var line = str.split('|');
        band = line[0].trim();
        town = line[1].trim();
        venues = line[3].trim();

        if (!concerts[town]) {
            concerts[town] = {};
        }
        if (!concerts[town][venues]) {
            concerts[town][venues] = [];
        }
        if (concerts[town][venues].indexOf(band) === -1) {
            concerts[town][venues].push(band);
        }
    });
    var sortedObj = sortObjectProperties(concerts);
    for (var str in sortedObj) {
        sortedObj[str] = sortObjectProperties(sortedObj[str]);
        for (var plc in sortedObj[str]) {
            sortedObj[str][plc].sort();
        }
    }
    console.log(JSON.stringify(sortedObj));
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

concert([
    'ZZ Top | London | 2-Aug-2014 | Wembley Stadium',
    'Iron Maiden | London | 28-Jul-2014 | Wembley Stadium',
    'Metallica | Sofia | 11-Aug-2014 | Lokomotiv Stadium',
    'Helloween | Sofia | 1-Nov-2014 | Vassil Levski Stadium',
    'Iron Maiden | Sofia | 20-June-2015 | Vassil Levski Stadium',
    'Helloween | Sofia | 30-July-2015 | Vassil Levski Stadium',
    'Iron Maiden | Sofia | 26-Sep-2014 | Lokomotiv Stadium',
    'Helloween | London | 28-Jul-2014 | Wembley Stadium',
    'Twisted Sister | London | 30-Sep-2014 | Wembley Stadium',
    'Metallica | London | 03-Oct-2014 | Olympic Stadium',
    'Iron Maiden | Sofia | 11-Apr-2016 | Lokomotiv Stadium',
    'Iron Maiden | Buenos Aires | 03-Mar-2014 | River Plate Stadium'
]);
