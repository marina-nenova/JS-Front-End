function solve(day, age) {
  let ticketPrice;
  if (age >= 0 && age <= 18) {
    if (day === "Weekday") {
      ticketPrice = 12;
    } else if (day === "Weekend") {
      ticketPrice = 15;
    } else if (day === "Holiday") {
      ticketPrice = 5;
    }
  } else if (age > 18 && age <= 64) {
    if (day === "Weekday") {
      ticketPrice = 18;
    } else if (day === "Weekend") {
      ticketPrice = 20;
    } else if (day === "Holiday") {
      ticketPrice = 12;
    }
  } else if (age > 64 && age <= 122) {
    if (day === "Weekday") {
      ticketPrice = 12;
    } else if (day === "Weekend") {
      ticketPrice = 15;
    } else if (day === "Holiday") {
      ticketPrice = 10;
    }
  }
  if (ticketPrice) {
    console.log(`${ticketPrice}$`);
  } else {
    console.log(`Error!`);
  }
}

solve("Weekday", 42);
solve("Holiday", -12);
solve("Holiday", 15);
