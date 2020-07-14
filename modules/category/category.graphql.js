import graphql from 'graphql';

const { GraphQLObjectType, GraphQLString, GraphQLNonNull } = graphql;

const CategoryType = new GraphQLObjectType({
        name: 'Category',
        fields: () => ({
                name: { type: new GraphQLNonNull(GraphQLString) },
                image: { type: new GraphQLNonNull(GraphQLString) },
        }),
});

export default CategoryType;