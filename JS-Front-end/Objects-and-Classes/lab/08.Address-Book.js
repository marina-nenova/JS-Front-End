function addressBook(infoArr) {
  let addresses = {};

  for (const info of infoArr) {
    let [name, street] = info.split(":");
    addresses[name] = street;
  }

  let sortedAddresses = Object.fromEntries(Object.entries(addresses).sort());
  let entries = Object.entries(sortedAddresses);

  for (const [name, street] of entries) {
    console.log(`${name} -> ${street}`);
  }
}

addressBook([
  "Tim:Doe Crossing",
  "Bill:Nelson Place",
  "Peter:Carlyle Ave",
  "Bill:Ornery Rd",
]);

addressBook([
  "Bob:Huxley Rd",
  "John:Milwaukee Crossing",
  "Peter:Fordem Ave",
  "Bob:Redwing Ave",
  "George:Mesta Crossing",
  "Ted:Gateway Way",
  "Bill:Gateway Way",
  "John:Grover Rd",
  "Peter:Huxley Rd",
  "Jeff:Gateway Way",
  "Jeff:Huxley Rd",
]);
