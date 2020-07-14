const graphql = require('graphql');

const CategoryQueries = require('../modules/category/category.queries');
const CategoryMutations = require('../modules/category/category.mutations');
const SubcategoryQueries = require('../modules/category/category.queries');
const SubcategoryMutations = require('../modules/category/category.mutations');

const { GraphQLObjectType, GraphQLSchema } = graphql;

const Mutation = new GraphQLObjectType({
        name: 'Mutation',
        fields: {
                setCategory: {
                        ...CategoryMutations.setCategory
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
