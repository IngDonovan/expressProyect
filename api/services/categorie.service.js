const { faker } = require('@faker-js/faker');
const boom = require('@hapi/boom');

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

  async create(data){
    const newCategory = data.category;
    this.categories.push(newCategory);
    return (
      {
        status: "Create",
        newCategory
      }
    );
  }
  async find(){
    return this.categories;
  }
  async findOne(category){
    const isCategory = this.categories.includes(category);
    if (!isCategory) {
      throw boom.notFound('Category not found');
    } else {
      return category;
    }

  }

  async update(category, changes){
    const newCategory = changes.category;
    const isCategory = this.categories.includes(category);
    if (!isCategory) {
      throw boom.notFound('Category not found');
    }
    for (let i = 0; i < this.categories.length; i++) {
      if (this.categories[i] === category) {
        // Actualizar la categoría en el array
        this.categories[i] = newCategory;
      }
    }
    return this.categories;
  }

  async delete(category){
    const isCategory = this.categories.includes(category);
    if (!isCategory) {
      throw boom.notFound('Category not found');
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
