const { faker } = require('@faker-js/faker');

class CategorieService {

  constructor(){
    this.categories = [];
    this.generate();
  }

  generate(){
    const limit = 10;
    for (let index = 0; index < limit; index++) {
      this.categories.push(faker.commerce.department());
    }
  }

  create(data){
    const newCategory = data.category;
    this.categories.push(newCategory);
    return (
      {
        status: "Create",
        newCategory
      }
    );
  }
  find(){
    return this.categories;
  }
  findOne(category){
    const isCategory = this.categories.includes(category);
    if (!isCategory) {
      return `This category ${category} not Found`;
    } else {
      return category;
    }
    return this.categories.includes(category);
  }
  //seguir aca--------------
  update(category, changes){
    const newCategory = changes.category;
    const isCategory = this.categories.includes(category);
    if (!isCategory) {
      return `This category ${category} not Found`;
    }
    for (let i = 0; i < this.categories.length; i++) {
      if (this.categories[i] === category) {
        // Actualizar la categoría en el array
        this.categories[i] = newCategory;
      }
    }
    return this.categories;
  }

  delete(category){
    const isCategory = this.categories.includes(category);
    if (!isCategory) {
      return `This category ${category} not Found`;
    }
    for (let i = 0; i < this.categories.length; i++) {
      if (this.categories[i] === category) {
        // Actualizar la categoría en el array
        this.categories.splice(i, 1);
      }
    }
    return this.categories;
  }

}

module.exports = CategorieService
