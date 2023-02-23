function solve(numberOfPeople, type, day) {
  let pricePerPerson;
  if (type === "Students") {
    if (day === "Friday") {
      pricePerPerson = 8.45;
    } else if (day === "Saturday") {
      pricePerPerson = 9.8;
    } else if (day === "Sunday") {
      pricePerPerson = 10.46;
    }
  } else if (type === "Business") {
    if (day === "Friday") {
      pricePerPerson = 10.9;
    } else if (day === "Saturday") {
      pricePerPerson = 15.6;
    } else if (day === "Sunday") {
      pricePerPerson = 16;
    }
  } else if (type === "Regular") {
    if (day === "Friday") {
      pricePerPerson = 15;
    } else if (day === "Saturday") {
      pricePerPerson = 20;
    } else if (day === "Sunday") {
      pricePerPerson = 22.5;
    }
  }
  let total = numberOfPeople * pricePerPerson;
  if (type === "Students" && numberOfPeople >= 30) {
    total -= total * 0.15;
  } else if (type === "Business" && numberOfPeople >= 100) {
    total -= 10 * pricePerPerson;
  } else if (
    type === "Regular" &&
    numberOfPeople >= 10 &&
    numberOfPeople <= 20
  ) {
    total -= total * 0.05;
  }
  console.log(`Total price: ${total.toFixed(2)}`);
}

solve(30, "Students", "Sunday");

solve(40, "Regular", "Saturday");
