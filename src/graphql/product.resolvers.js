const ProductsService = require('./../services/product.service');
const service = new ProductsService();

const getProduct = async (_, { id }) => {


    const product = await service.findOne(id);

    return product;

}

const getProducts = async () => {

    const products = await service.find({});
    return products

}

const addProduct = async (_, { product }) => {
    const newProduct = await service.create(product);
    return newProduct;

}

const updateProduct = async (_, { id, product }) => {
    const updateProduct = await service.update(id, product);
    return updateProduct;
}

const deleteProduct = async (_, { id }) => {
    await service.delete(id);
    return id;
}

const getProductsByCategory = async (parent) => {

    const id = parent.dataValues.id;
    const products = await service.getByCategory(id);
    return products;

}

module.exports = {
    addProduct,
    deleteProduct,
    getProduct,
    getProducts,
    updateProduct,
    getProductsByCategory

}