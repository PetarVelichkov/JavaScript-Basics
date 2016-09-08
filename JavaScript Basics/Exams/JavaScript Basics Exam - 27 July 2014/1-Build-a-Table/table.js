function buildTable(input) {
    var start = Number(input[0]);
    var end = Number(input[1]);
    console.log('<table>');
    console.log('<tr><th>Num</th><th>Square</th><th>Fib</th></tr>');

    for (var i = start; i <= end; i++) {
        if (isFib(i)) {
            console.log('<tr><td>' + i + '</td><td>' + i*i + '</td><td>' + 'yes' + '</td></tr>');
        }
        else {
            console.log('<tr><td>' + i + '</td><td>' + i*i + '</td><td>' + 'no' + '</td></tr>');
        }
    }
    console.log('</table>');

    function isFib(number)
    {
        var prev = 0;
        var curr = 1;
        while (prev <= number) {
            if (prev == number) {
                return true;
            }
            curr = prev + curr;
            prev = curr - prev;
        }
        return false;
    }
}

buildTable([ '2', '6' ]);
