const graphql = require('graphql');

const CategoryType = require('./category.graphql');
const Category = require('../../models/category');


const { GraphQLNonNull, GraphQLString } = graphql;

module.exports = {
        setCategory: {
                type: CategoryType,
                args: {
                        name: { type: new GraphQLNonNull(GraphQLString) },
                        image: { type: new GraphQLNonNull(GraphQLString) }
                },
                resolve(parent, { name, image }) {
                        const category = new Category({
                                name,
                                image
                        });
                        return category.save()
                }
        },
}
