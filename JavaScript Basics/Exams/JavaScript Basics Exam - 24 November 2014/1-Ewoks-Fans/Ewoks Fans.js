function ewoksFans(input) {
    var fixedDate = new Date('05.25.1973'),
        before = new Date('01.01.1900'),
        after = new Date('01.01.2015'),
        isPrint = false,
        fans = [],
        haters = [];

    for (var i = 0; i < input.length; i++) {
        var date = input[i];
        date = date.split('.');
        var day = date[0],
        month = date[1],
        year = date[2],
        newDate = new Date(year, month - 1, day);
        if (newDate.getTime() <= before.getTime() || newDate.getTime() >= after.getTime()) {
            continue;
        }
        if (newDate.getTime() >= fixedDate.getTime()) {
            isPrint = true;
            fans.push(newDate);
        } else {
            haters.push(newDate);
            isPrint = true;
        }
    }

    fans.sort(function (a,b) {
        return a.getTime() - b.getTime();
    });
    haters.sort(function (a,b) {
        return a.getTime() - b.getTime();
    });

    if (isPrint) {
        if (fans.length != 0 && haters.length != 0) {
            console.log('The biggest fan of ewoks was born on ' + fans[fans.length - 1].toDateString());
            console.log('The biggest hater of ewoks was born on ' + haters[0].toDateString());
        } else if (fans.length === 0 && haters.length != 0) {
            console.log('The biggest hater of ewoks was born on ' + haters[0].toDateString());
        } else if (fans.length != 0 && haters.length === 0) {
            console.log('The biggest fan of ewoks was born on ' + fans[fans.length - 1].toDateString());
        }
    } else {
        console.log('No result');
    }
}

var input = [
    '25.11.2002',
    '19.06.2001',
    '18.13.1966',
    '29.03.1955'
];
ewoksFans(input);
