const menu = {
_courses:{
    appetizer:[],
    mains:[],
    dessert:[]
},
  get appetizers() {

},
      set appetizers(appetizerIn) {

  },
      get mains() {

  },
        set mains(mainIn) {

  },
    get desserts() {

  },
       set desserts(dessertsIn) {

  },
    get courses() {
      return {
         appetizers: this._courses.appetizers,
         mains: this._courses.mains,
        desserts: this._desserts.desserts
   }
  },

  addDishToCourse(courseName, dishName, dishPrice) {
    const dish = {
      name: dishName,
      price: dishPrice
    };
	this._courses[courseName].push(dish);
  },

  getRandomDishFromCourse(courseName) {
    let dishes = this._courses[courseName];
    let rnd = Math.floor(Math.random() * dishes.length);
   return dishes[rnd];
  },

  generateRandomMeal() {
   return {
     appetizer: this.getRandomDishFromCourse('appetizer'),
main: this.getRandomDishFromCourse('mains'),
dessert: this.getRandomDishFromCourse('dessert')
  }
}
}


menu.addDishToCourse('appetizer', 'egg', 5)
menu.addDishToCourse('appetizer', 'egg1', 15)
menu.addDishToCourse('appetizer', 'egg2', 25)
menu.addDishToCourse('mains', 'steak', 5)
menu.addDishToCourse('mains', 'steak1', 15)
menu.addDishToCourse('mains', 'steak2', 25)
menu.addDishToCourse('dessert', 'IC', 5)
menu.addDishToCourse('dessert', 'IC1', 15)
menu.addDishToCourse('dessert', 'IC2', 25)

const meal = menu.generateRandomMeal()
console.log(meal)
