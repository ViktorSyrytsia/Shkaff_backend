const graphql = require('graphql');

const { GraphQLObjectType, GraphQLString, GraphQLNonNull, GraphQLID } = graphql;

const CategoryType = new GraphQLObjectType({
        name: 'Category',
        fields: () => ({
                id: { type: GraphQLID },
                name: { type: new GraphQLNonNull(GraphQLString) },
                image: { type: new GraphQLNonNull(GraphQLString) },
        }),
});

module.exports = CategoryType;
