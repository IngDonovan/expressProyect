const { faker } = require('@faker-js/faker');
const boom = require('@hapi/boom')

class ProductService {

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
        isBlock: faker.datatype.boolean(),
      });

    }
  }

  async create(data){
    const newProduct = {
      id: faker.string.uuid(),
      ...data
    };
    this.products.push(newProduct);
    return newProduct;
  }
  async find(){
    return this.products;
  }
  async findOne(id){
    // const name = this.getTotal();
    const product = this.products.find(item => item.id === id);
    if (!product) {
      throw boom.notFound('Product not found');
    } else {
      if (product.isBlock) {
        throw boom.conflict('Product is block');
      }
      return product
    }
  }
  async update(id, changes){
    const index = this.products.findIndex(item => item.id === id);
    if (index === -1) {
      throw boom.notFound('Product not found');
    }
    const product = this.products[index];
    this.products[index] = {
      ...product,
      ...changes
    };
    return this.products[index];
  }

  async delete(id){
    const index = this.products.findIndex(item => item.id === id);
    if (index === -1) {
      throw boom.notFound('Product not found');
    }
    this.products.splice(index, 1);
    return { id };
  }

}

module.exports = ProductService;
