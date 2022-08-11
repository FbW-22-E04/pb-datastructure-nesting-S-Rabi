let board = [
  [1, 2, 3],
  ["quick", "brown", "fox", "jumped", "over", "lazy", "dog"],
  [true, false],
];
for (let key of board) {
  for (let key2 of key) {
    console.log(key2);
  }
}
console.log("--------------------------");
// 2:
const doggo = {
  name: "Sara",
  breed: "pitbull",
  favFood: ["fish", "meat", "Kebab"],
};
console.log(doggo.favFood[1]);

console.log(doggo.favFood);

console.log("--------------------------");
// 3:

const recipes = {
  ingredients: {
    sugar: "sugar",
    butter: "butter",
    flour: "flour",
  },
  printIngredients() {
    return Object.values(this.ingredients);
  },
};

recipes.ingredients.ginger = "ginger";
console.log(recipes.ingredients);

recipes.ingredients.sugar = "brown suger";
console.log(recipes.ingredients);

console.log(recipes.printIngredients());
