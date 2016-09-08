function tetevenTrip(input) {
    var line,
        carModel,
        fuelType,
        routeNumber,
        luggageWeight,
        base,
        extraFuel,
        totalFuel,
        c,
        snowConsumption;

    for (var i = 0; i < input.length; i++) {
        line = input[i];
        line = line.split(' ');
        carModel = line[0];
        fuelType = line[1];
        routeNumber = Number(line[2]);
        luggageWeight = Number(line[3]);

        if (fuelType === 'gas') {
            c = 1.2;
            result(fuelType, c, routeNumber);
        }
        else if(fuelType === 'petrol'){
            c = 1;
            result(fuelType, c, routeNumber);
        } else {
            c = 0.8;
            result(fuelType, c, routeNumber);
        }
    }
    function result(fuelType, c, routeNumber) {
        base = 10 * c;
        extraFuel = luggageWeight * 0.01;
        base = base + extraFuel;
        if (routeNumber === 1) {
            totalFuel = 110 * (base / 100);
            snowConsumption = 0.3 * base;
            snowConsumption = 10 * (snowConsumption / 100);
            totalFuel = totalFuel + snowConsumption;
            totalFuel = Math.round(totalFuel);
            console.log(carModel + ' ' + fuelType + ' ' + routeNumber + ' ' + totalFuel);
        } else {
            totalFuel = 95 * (base / 100);
            snowConsumption = 0.3 * base;
            snowConsumption = 30 * (snowConsumption / 100);
            totalFuel = totalFuel + snowConsumption;
            totalFuel = Math.round(totalFuel);
            console.log(carModel + ' ' + fuelType + ' ' + routeNumber + ' ' + totalFuel);
        }
    }
}
var input = [
    'BMW petrol 1 320.5',
    'Golf petrol 2 150.75',
    'Lada gas 1 202',
    'Mercedes diesel 2 312.54'
];
tetevenTrip(input);

