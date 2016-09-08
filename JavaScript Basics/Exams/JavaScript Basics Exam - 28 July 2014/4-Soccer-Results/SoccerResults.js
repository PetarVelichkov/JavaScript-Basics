function SoccerResults(input) {
    var homeTeam, awayTeam, homeGoal, awayGoal;
    var results = {};
    input.forEach(function (str) {
        var line = str.split(/[/:-]/g);
        homeTeam = line[0].trim();
        awayTeam = line[1].trim();
        homeGoal = Number(line[2].trim());
        awayGoal = Number(line[3].trim());

        results = score(homeTeam, awayTeam, homeGoal, awayGoal);
        results = score(awayTeam, homeTeam, awayGoal, homeGoal);
    });

    results = sortObjectProperties(results);
    for (var obj in results) {
        results[obj].matchesPlayedWith = results[obj].matchesPlayedWith.sort(function (p1, p2) {
            if (p1 !== p2) {
                return p1.localeCompare(p2)
            }
        });
    }

    console.log(JSON.stringify(results));

    function score(team, matchesPlayedWith, goalScored, goalConceded) {
        if (!results[team]) {
            results[team] = {
                goalsScored: goalScored,
                goalsConceded: goalConceded,
                matchesPlayedWith: []
            };
            results[team].matchesPlayedWith.push(matchesPlayedWith);
        } else {
            results[team].goalsScored += goalScored;
            results[team].goalsConceded += goalConceded;
            if (results[team].matchesPlayedWith.indexOf(matchesPlayedWith) === -1) {
                results[team].matchesPlayedWith.push(matchesPlayedWith);
            }
        }
        return results;
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
SoccerResults([
    'Germany / Argentina: 1-0',
    'Brazil / Netherlands: 0-3',
    'Netherlands / Argentina: 0-0',
    'Brazil / Germany: 1-7',
    'Argentina / Belgium: 1-0',
    'Netherlands / Costa Rica: 0-0',
    'France / Germany: 0-1',
    'Brazil / Colombia: 2-1'
]);
