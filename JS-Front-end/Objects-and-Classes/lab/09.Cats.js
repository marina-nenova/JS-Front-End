function catsFactory(catsArr) {
  class Cat {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }

    meow() {
      console.log(`${this.name}, age ${this.age} says Meow`);
    }
  }

  let cats = [];

  for (const catInfo of catsArr) {
    let [name, age] = catInfo.split(" ");
    cats.push(new Cat(name, age));
  }

  for (const cat of cats) {
    cat.meow();
  }
}

catsFactory(["Mellow 2", "Tom 5"]);
catsFactory(["Candy 1", "Poppy 3", "Nyx 2"]);
