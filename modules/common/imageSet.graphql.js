import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLNonNull,
    GraphQLID
} from 'graphql';

export const ImageSetType = new GraphQLObjectType({
    name: 'ImageSet',
    fields: () => ({
        id: { type: GraphQLID },
        link: { type: GraphQLString },
    }),
});

export const ImageSetInput = new GraphQLObjectType({
    name: 'ImageSetInput',
    fields: () => ({
        link: { type: new GraphQLNonNull(GraphQLString) },
    }),
});
