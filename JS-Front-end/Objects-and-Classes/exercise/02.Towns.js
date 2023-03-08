function towns(arr) {
    let townsArr = [];

    for (const str of arr) {
        let [town, latitude, longitude] = str.split(" | ")
        latitude = Number(latitude).toFixed(2);
        longitude = Number(longitude).toFixed(2);
        townsArr.push({ town, latitude, longitude});
    }

    townsArr.forEach(town => console.log(town))
}

towns(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625']
);

towns(['Plovdiv | 136.45 | 812.575']);