const boom = require('@hapi/boom');


const checkJwtGQL = async (context) => {

    const { user } = await context.authenticate('jwt', { session: false });

    if (!user) {
        throw boom.unauthorized('jwt is not valid');
    }

    return user
}


module.exports = {
    checkJwtGQL
}