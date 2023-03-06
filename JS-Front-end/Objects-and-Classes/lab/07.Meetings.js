function meetings(arr) {
    let meetingsBook = {};
    for (const meeting of arr) {
        let [day, person] = meeting.split(" ");
        if (!meetingsBook[day]) {
            meetingsBook[day] = person;
            console.log(`Scheduled for ${day}`);
        } else {
            console.log(`Conflict on ${day}!`);
        }
    }

    let entries = Object.entries(meetingsBook);

    for (const [day, name] of entries) {
        console.log(`${day} -> ${name}`);
    }
}

meetings(['Monday Peter',
'Wednesday Bill',
'Monday Tim',
'Friday Tim']
);

meetings(['Friday Bob',
'Saturday Ted',
'Monday Bill',
'Monday John',
'Wednesday George']
);