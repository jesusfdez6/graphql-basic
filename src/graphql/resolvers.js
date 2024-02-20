const { addProduct, deleteProduct, getProduct, getProducts, updateProduct, getProductsByCategory } = require('./product.resolvers');
const { login } = require('./auth.resolvers');
const { addCategory, getCategory } = require('./category.resolvers');
const { RegularExpression } = require('graphql-scalars')

const categoryNameType = new RegularExpression('categoryNameType', /^[A-Za-z0-9]{3,8}$/)


const resolvers = {
    Query: {
        product: getProduct,
        products: getProducts,
        category: getCategory
    },
    Mutation: {
        addProduct,
        deleteProduct,
        updateProduct,
        login,
        addCategory

    },
    categoryNameType,
    Category: {
        products: (arg) => getProductsByCategory(arg)
    }
}

module.exports = resolvers