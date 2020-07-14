const graphql = require('graphql');

const { GraphQLObjectType, GraphQLString, GraphQLNonNull } = graphql;
console.log(graphql);

const CategoryType = new GraphQLObjectType({
        name: 'Category',
        fields: () => ({
                id: { type: GraphQLString },
                name: { type: new GraphQLNonNull(GraphQLString) },
                image: { type: new GraphQLNonNull(GraphQLString) },
        }),
});

module.exports = CategoryType;