function convertToJson(name, lastName, hairColor) {
    let person = { name, lastName, hairColor };
    let personJson = JSON.stringify(person);
    console.log(personJson);
}

convertToJson('George', 'Jones', 'Brown');
convertToJson('Peter', 'Smith', 'Blond');