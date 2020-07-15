import {GraphQLObjectType, GraphQLString, GraphQLID, GraphQLNonNull} from 'graphql'

const CategoryType = new GraphQLObjectType({
        name: 'Category',
        fields: () => ({
                id: { type: GraphQLID },
                name: { type: new GraphQLNonNull(GraphQLString) },
                image: { type: new GraphQLNonNull(GraphQLString) },
        }),
});

export default CategoryType;
