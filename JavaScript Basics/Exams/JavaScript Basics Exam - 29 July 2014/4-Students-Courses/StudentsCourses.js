function StudentsCourses(input) {
    var course, grade, visit, student;
    var courses = {};

    input.forEach(function (str) {
        var line = str.split('|');
        course = line[1].trim();
        student = line[0].trim();
        grade = Number(line[2].trim());
        visit = Number(line[3].trim());

        if (!courses[course]) {
            courses[course] = {
                avgGrade: grade,
                avgVisits: visit,
                counter: 1,
                students: []
            };
            courses[course].students.push(student);
        } else {
            courses[course].avgGrade += grade;
            courses[course].avgVisits += visit;
            courses[course].counter += 1;
            if (courses[course].students.indexOf(student) === -1) {
                courses[course].students.push(student);
            }
        }
    });
    courses = sortObjectProperties(courses);
    for (var index in courses) {
        courses[index].avgGrade = Number((courses[index].avgGrade / courses[index].counter).toFixed(2).replace(/\.?0+$/,''));
        courses[index].avgVisits = Number((courses[index].avgVisits / courses[index].counter).toFixed(2).replace(/\.?0+$/,''));
        delete courses[index].counter;
    }
    for (var obj in courses) {
        courses[obj].students = courses[obj].students.sort(function (p1, p2) {
            if (p1 !== p2) {
                return p1.localeCompare(p2)
            }
        });
    }

    console.log(JSON.stringify(courses));

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

StudentsCourses([
    'Peter Nikolov | PHP  | 5.50 | 8',
    'Maria Ivanova | Java | 5.83 | 7',
    'Ivan Petrov   | PHP  | 3.00 | 2',
    'Ivan Petrov   | C#   | 3.00 | 2',
    'Peter Nikolov | C#   | 5.50 | 8',
    'Maria Ivanova | C#   | 5.83 | 7',
    'Ivan Petrov   | C#   | 4.12 | 5',
    'Ivan Petrov   | PHP  | 3.10 | 2',
    'Peter Nikolov | Java | 6.00 | 9'
]);
