const graphql = require('graphql');

const SubcategoryType = require('./subcategory.graphql');
const Subcategory = require('../../models/subcategory');

const { GraphQLID, GraphQLList } = graphql;

module.exports = {
        getSubcategory: {
                type: SubcategoryType,
                args: { id: { type: GraphQLID } },
                resolve: (parent, args) => Category.findById(args.id)
        },
        getSubcategories: {
                type: new GraphQLList(CategoryType),
                resolve: () => Category.find({}),
        },
}
