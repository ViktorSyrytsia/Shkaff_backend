const graphql = require('graphql');

const CategoryType = require('./category.graphql');
const Category = require('../../models/category');


const { GraphQLID, GraphQLList } = graphql;

module.exports = {
    getCategory: {
        type: CategoryType,
        args: { id: { type: GraphQLID } },
        resolve: (parent, args) => Category.findById(args.id)
    },
    getCategories: {
        type: new GraphQLList(CategoryType),
        resolve: () => Category.find({}),
    },
}
