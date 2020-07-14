const graphql = require('graphql');

const {Category} = require('../../models');
const CategoryType = require('../category/category.graphql');

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLNonNull,
} = graphql;

const SubcategoryType = new GraphQLObjectType({
    name: 'Subcategory',
    fields: () => ({
        id: { type: GraphQLString },
        name: { type: new GraphQLNonNull(GraphQLString) },
        category: {
            type: CategoryType,
            resolve: (parent) => Category.findById(parent.categoryId)
        }
    }),
})

module.exports = SubcategoryType;
