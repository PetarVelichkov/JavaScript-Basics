function StudentProtocol(input) {
    var courses = {};
    
    input = input.map(function (str) {
        return str.replace(/\s+/g, ' ')
    });
    input.forEach(function (str) {
        var result = Number(str.split(':')[1].trim()),
            studentName = str.split(':')[0].split('-')[0].trim(),
            exam = str.split(':')[0].split('-')[1].trim();
        if (result >= 0 && result <= 400) {
            if (!courses[exam]) {
                courses[exam] = [];
            }
            var student = courses[exam].filter(function (st) {
                return st.name === studentName;
            })[0];
            if (!student) {
                courses[exam].push(
                    {
                        name: studentName,
                        result: result,
                        makeUpExams: 0
                    }
                );
            } else {
                if (result > student.result) {
                    student.result = result
                }
                student.makeUpExams++;
            }
        }
    });

    for (var key in courses) {
        courses[key] = courses[key].sort(function (p1, p2) {
            if (p2.result !== p1.result) {
                return p2.result - p1.result;
            }
            if (p1.makeUpExams !== p2.makeUpExams) {
                return p1.makeUpExams - p2.makeUpExams;
            }
            return p1.name.localeCompare(p2.name);
        })
    }

    console.log(JSON.stringify(courses));
}

StudentProtocol([
    'Bimon Cowell - PHP : 200',
    'Bimon Cowell - PHP : 200',
    'Simon Cowell-PHP: 500',
    'Aeter Jackson - PHP: 200',
    'Aeter Jackson - PHP: 200',
    'Aeter Jackson - PHP: 200'
]);