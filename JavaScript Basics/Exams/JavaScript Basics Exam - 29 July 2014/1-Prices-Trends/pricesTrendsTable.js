function pricesTrendsTable(input) {
    var length = input.length;
    var prevElem = Number(input[0]).toFixed(2);
    console.log('<table>');
    console.log('<tr><th>Price</th><th>Trend</th></tr>');
    console.log('<tr><td>' + prevElem + '</td><td><img src="fixed.png"/></td></tr>');
    for (var i = 1; i < length; i++) {
        var currentElem = Number(input[i]).toFixed(2);
        if (prevElem < currentElem) {
            console.log('<tr><td>' + currentElem + '</td><td><img src="up.png"/></td></tr>');
        }
        else if(prevElem > currentElem) {
            console.log('<tr><td>' + currentElem + '</td><td><img src="down.png"/></td></td>');
        }
        else {
            console.log('<tr><td>' + currentElem + '</td><td><img src="fixed.png"/></td></td>');
        }
        prevElem = currentElem;
    }
    console.log('</table>');
}

pricesTrendsTable([ '36.333', '36.5', '37.019', '35.4', '35', '35.001', '36.225' ]);
//pricesTrendsTable([ '50', '60' ]);
