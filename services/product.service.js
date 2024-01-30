const { faker } = require('@faker-js/faker');

class ProductsService {

  constructor(){
    this.products = [];
    this.generate();
  }

  generate(){
    const limit = 100;
    for (let index = 0; index < limit; index++) {
      this.products.push({
        id: faker.string.uuid(),
        title: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(), 10),
        category: faker.commerce.department(),
        description: faker.commerce.productDescription(),
        image: faker.image.url(),
      });

    }
  }

  create(){

  }
  find(){
    return this.products;
  }
  findOne(id){
    return this.products.find(item => item.id === id);
  }
  update(){

  }
  delete(){

  }

}

module.exports = ProductsService
