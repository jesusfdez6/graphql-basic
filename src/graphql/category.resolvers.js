const boom = require('@hapi/boom')
const CategoryService = require('./../services/category.service');
const { checkRolesGQL } = require('./../utils/checkRoles');
const { checkJwtGQL } = require('../utils/checkJwt');
const service = new CategoryService();

const addCategory = async (_, { category }, context) => {


    const user = await checkJwtGQL(context);

    checkRolesGQL(user, 'customer');

    const newCategory = await service.create(category);
    return newCategory;

}
const getCategory = async (_, { id }) => {



    const category = await service.findOne(id);
    return category;

}



module.exports = {
    addCategory,
    getCategory
}