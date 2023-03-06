function phoneBook(arr) {
    let phoneBook = {};

    for (const info of arr) {
        let [name, phone] = info.split(" ");
        phoneBook[name] = phone;
    }

    let entries = Object.entries(phoneBook);
    for (const [key, value] of entries) {
        console.log(`${key} -> ${value}`);
    }
}

phoneBook(['Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344']
);

phoneBook(['George 0552554',
'Peter 087587',
'George 0453112',
'Bill 0845344']
);