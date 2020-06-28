let name = "Zakhar";
console.log(name);
console.log(typeof name);

const lastName = "Stolyarchuk";
console.log(lastName);

let age = 13;
console.log(age);
console.log(typeof age)



const hero = {
    name: "Hero",
    speed: 5,
    lifes: 200,
    score: 1242,
    toShowName() {
       console.log(this.name);
    },
};
console.log(hero);

hero.toShowName();