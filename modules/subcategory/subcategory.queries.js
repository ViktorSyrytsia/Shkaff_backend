const graphql = require('graphql');

const SubcategoryType = require('./subcategory.graphql');
const Subcategory = require('../../models/subcategory');

const { GraphQLID, GraphQLList } = graphql;

module.exports = {
        getSubcategory: {
                type: SubategoryType,
                args: { id: { type: GraphQLID } },
                resolve: (parent, args) => Subcategory.findById(args.id)
        },
        getSubcategories: {
                type: new GraphQLList(SubcategoryType),
                resolve: () => Subcategory.find({}),
        },
}
