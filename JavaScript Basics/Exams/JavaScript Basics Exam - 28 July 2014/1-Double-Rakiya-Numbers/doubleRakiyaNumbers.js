function doubleRakiyaNumbers(input) {
    var start = Number(input[0]);
    var end = Number(input[1]);
    console.log('<ul>');

    for (var i = start; i <= end; i++) { //main for loop
        if (doubleNumber(i)) {
            console.log('<li><span class=\'rakiya\'>' + i + '</span><a href="view.php?id=' + i + '>View</a></li>');
        }
        else {
            console.log('<li><span class=\'num\'>' + i + '</span></li>');
        }
    }
    console.log('</ul>');

    function doubleNumber(number){
        var stringValue = String(number);
        var length = stringValue.length;
        if (length < 4) {
            return false;
        }
        for (var i = 0; i < length - 3; i++) {
            var searchNum = stringValue[i] + stringValue[i + 1];
            for (var j = i + 2; j < length - 1; j++) {
                var secondNum = stringValue[j] + stringValue[j + 1];
                if (searchNum === secondNum) {
                    return true;
                }
            }
        }
        return false;
    }
}

doubleRakiyaNumbers(['55555', '55560']);
