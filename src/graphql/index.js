const { ApolloServer } = require('apollo-server-express');
const { ApolloServerPluginLandingPageGraphQLPlayground } = require('apollo-server-core');
const { loadFiles } = require('@graphql-tools/load-files');
const resolvers = require('./resolvers')
const { buildContext } = require('graphql-passport');
const { typeDefs: scalarsTypeDef, resolvers: scalarsResolvers } = require('graphql-scalars')





const useGraphQL = async (app) => {
    const typeDefs = [
        ...await loadFiles('./src/**/*.graphql'),
        scalarsTypeDef
    ]
    const allResolvers = [
        resolvers,
        scalarsResolvers
    ]
    const server = new ApolloServer({
        typeDefs,
        resolvers: allResolvers,
        context: ({ req, res }) => buildContext({ req, res }),
        playground: true,
        plugins: [
            ApolloServerPluginLandingPageGraphQLPlayground]
    })
    await server.start()
    server.applyMiddleware({ app });
}

module.exports = { useGraphQL };




//Lists
//[String]
//[Int]
//


/*
const resolvers = {
    Query: {
        hello: () => "",
        getPerson: (_, args) => `mi nombre es ${args.name}, y tengo ${args.age} años`,
        getInt: (_, args) => args.age,
        getFloat: () => 1.5,
        getString: () => 'hola mundo',
        getBoolean: () => true,
        getId: () => '1',
        getNumbers: (_, args) => args.numbers,
        getProduct: () => {
            return {
                id: '1',
                name: "prueba",
                price: 100,
                description: 'prueba',
                image: 'image',
                createAt: new Date().toISOString()
            }
        }
    }
}*/
