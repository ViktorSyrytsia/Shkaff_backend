const graphql = require('graphql');

const SubcategoryType = require('./subcategory.graphql');
const {Subcategory} = require('../../models');

const { GraphQLID, GraphQLList } = graphql;

module.exports = {
        getSubcategory: {
                type: SubcategoryType,
                args: { id: { type: GraphQLID } },
                resolve: (parent, args) => Category.findById(args.id)
        },
        getSubcategories: {
<<<<<<< HEAD
                type: new GraphQLList(CategoryType),
                resolve: () => Category.find({}),
        },
=======
                type: new GraphQLList(SubcategoryType),
                resolve: () => Subcategory.find({}),
        }
>>>>>>> 97fe2c373bb87593ff902fccbc9d624011e148fa
}
