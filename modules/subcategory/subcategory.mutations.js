const graphql = require('graphql');

const SubcategoryType = require('./subcategory.graphql');
const {Subcategory} = require('../../models');


const { GraphQLNonNull, GraphQLString, GraphQLID } = graphql;

module.exports = {
        setSubcategory: {
                type: SubcategoryType,
                args: {
                        name: { type: new GraphQLNonNull(GraphQLString) },
                        categoryId: {type: GraphQLID}
                },
                resolve(parent, { name, categoryId }) {
                        const subcategory = new Subcategory({
                                name,
                                categoryId
                        });
                        return subcategory.save()
                }
        },
}
