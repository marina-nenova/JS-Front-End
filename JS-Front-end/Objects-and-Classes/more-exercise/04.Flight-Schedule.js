function flightSchedule([flightsInfo, statuses, searchedStatus]) {
  let searched = searchedStatus[0];

  let flights = flightsInfo.reduce((data, flight) => {
    let [number, ...dest] = flight.split(" ");
    let destination = dest.join(" ");
    data[number] = { destination, status: "Ready to fly" };
    return data;
  }, {});

  for (const flightInfo of statuses) {
    let [flightNum, newStatus] = flightInfo.split(" ");
    if (flights[flightNum]) {
      flights[flightNum].status = newStatus;
    }
  }

  for (const flight in flights) {
    if (flights[flight].status === searched) {
      console.log(
        `{ Destination: '${flights[flight].destination}', Status: '${flights[flight].status}' }`
      );
    }
  }
}

flightSchedule([
  [
    "WN269 Delaware",
    "FL2269 Oregon",
    "WN498 Las Vegas",
    "WN3145 Ohio",
    "WN612 Alabama",
    "WN4010 New York",
    "WN1173 California",
    "DL2120 Texas",
    "KL5744 Illinois",
    "WN678 Pennsylvania",
  ],
  [
    "DL2120 Cancelled",
    "WN612 Cancelled",
    "WN1173 Cancelled",
    "SK430 Cancelled",
  ],
  ["Cancelled"],
]);

// flightSchedule([
//   [
//     "WN269 Delaware",
//     "FL2269 Oregon",
//     "WN498 Las Vegas",
//     "WN3145 Ohio",
//     "WN612 Alabama",
//     "WN4010 New York",
//     "WN1173 California",
//     "DL2120 Texas",
//     "KL5744 Illinois",
//     "WN678 Pennsylvania",
//   ],
//   [
//     "DL2120 Cancelled",
//     "WN612 Cancelled",
//     "WN1173 Cancelled",
//     "SK330 Cancelled",
//   ],
//   ["Ready to fly"],
// ]);
