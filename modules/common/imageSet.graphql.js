import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLNonNull, GraphQLList
} from 'graphql';

export const ImageSetType = new GraphQLObjectType({
    name: 'ImageSet',
    fields: () => ({
        id: {type: GraphQLString},
        link: {type: GraphQLString},
    }),
});

export const ImageSetInput = new GraphQLObjectType({
    name: 'ImageSetInput',
    fields: () => ({
        link: {type: new GraphQLNonNull(GraphQLString)},
    }),
});
