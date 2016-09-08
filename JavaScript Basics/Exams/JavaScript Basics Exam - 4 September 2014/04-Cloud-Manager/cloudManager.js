function cloudManager(input) {
    var extension, file, memory;
    var cloud = {};
    input.forEach(function (s) {
        var line = s.split(/\s+/g);
        extension = line[1];
        file = line[0];
        memory = parseFloat(line[2]);

        if (!cloud[extension]) {
            cloud[extension] = {
                files: [],
                memory: memory
            };
            cloud[extension].files.push(file);
        } else {
            if (cloud[extension].files.indexOf(file) === -1) {
                cloud[extension].files.push(file);
            }
            cloud[extension].memory += memory;
        }
    });
    
    cloud = sortObjectProperties(cloud);
    for (var index in cloud) {
        cloud[index].files = cloud[index].files.sort(function (p1, p2) {
            if (p1 !== p2) {   
                return p1.localeCompare(p2);
            }
        });
        cloud[index].memory = cloud[index].memory.toFixed(2);
    }
    console.log(JSON.stringify(cloud));
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

cloudManager([
    'sentinel .exe 15MB',
    'zoomIt .msi 3MB',
    'skype .exe 45MB',
    'trojanStopper .bat 23MB',
    'kindleInstaller .exe 120MB',
    'setup .msi 33.4MB',
    'winBlock .bat 1MB'
]);