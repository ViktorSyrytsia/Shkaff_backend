const graphql = require('graphql');

const SubcategoryType = require('./subcategory.graphql');
const { Subcategory } = require('../../models');

const { GraphQLID, GraphQLList } = graphql;

module.exports = {
        getSubcategory: {
                type: SubcategoryType,
                args: { id: { type: GraphQLID } },
                resolve: (parent, args) => Category.findById(args.id)
        },
        getSubcategories: {
                type: new GraphQLList(SubcategoryType),
                resolve: () => Subcategory.find({}),
        }
}
