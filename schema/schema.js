const graphql = require('graphql');
const { GraphQLObjectType, GraphQLSchema } = graphql;

const grapqlExports = require('./graphqlExports');
const { CategoryQueries, CategoryMutations, SubcategoryQueries, SubcategoryMutations } = grapqlExports.module;


const Mutation = new GraphQLObjectType({
        name: 'Mutation',
        fields: {
                setCategory: {
                        ...CategoryMutations.setCategory
                },
                setSubcategory: {
                        ...SubcategoryMutations.setSubcategory
                }
        }
})

const Query = new GraphQLObjectType({
        name: 'Query',
        fields: {
                category: {
                        ...CategoryQueries.getCategory
                },
                categories: {
                        ...CategoryQueries.getCategories
                },
                subcategory: {
                        ...SubcategoryQueries.getSubcategory
                },
                subcategories: {
                        ...SubcategoryQueries.getSubcategories
                }
        }
});

module.exports = new GraphQLSchema({
        query: Query,
        mutation: Mutation,
})
