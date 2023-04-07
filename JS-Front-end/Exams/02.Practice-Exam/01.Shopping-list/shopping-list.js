function shopping(input) {
    let [items, ...commands] = input;
    let shoppingList = items.split('!');

    let commandParser = {
        'Urgent': addItem,
        'Unnecessary': removeItem,
        'Correct': correctItem,
        'Rearrange' : rearrangeItem,
      };
    
    for (const commandLine of commands) {
        if (commandLine === "Go Shopping!") {
            console.log(shoppingList.join(', '));
            break;
        }
        let commandTokens = commandLine.split(" ");
        let command = commandTokens[0];
        commandParser[command](...commandTokens.slice(1));

    }

    function addItem(item) {
        if (!shoppingList.includes(item)) {
            shoppingList.unshift(item);
        }
    }

    function removeItem(item) {
        if (shoppingList.includes(item)) {
            shoppingList = shoppingList.filter((i) => i !== item);
        }
    }

    function correctItem(oldItem, newItem) {
        if (shoppingList.includes(oldItem)) {
            let index = shoppingList.indexOf(oldItem);
            shoppingList[index] = newItem;
        }
    }

    function rearrangeItem(item) {
        if (shoppingList.includes(item)) {
            let index = shoppingList.indexOf(item);
            shoppingList.splice(index, 1);
            shoppingList.push(item);
        }
    }

}

shopping(["Tomatoes!Potatoes!Bread",
"Unnecessary Milk",
"Urgent Tomatoes",
"Go Shopping!"])


shopping(["Milk!Pepper!Salt!Water!Banana",
"Urgent Salt",
"Unnecessary Grapes",
"Correct Pepper Onion",
"Rearrange Grapes",
"Correct Tomatoes Potatoes",
"Go Shopping!"]
)
