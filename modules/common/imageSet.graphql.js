import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLNonNull,
    GraphQLInputObjectType
} from 'graphql';

export const ImageSetType = new GraphQLObjectType({
    name: 'ImageSet',
    fields: () => ({
        link: { type: GraphQLString },
    }),
});

export const ImageSetInput = new GraphQLInputObjectType({
    name: 'ImageSetInput',
    fields: () => ({
        link: { type: new GraphQLNonNull(GraphQLString) },
    }),
});
